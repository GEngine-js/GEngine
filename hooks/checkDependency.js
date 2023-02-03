/**
 * https://www.jianshu.com/p/a642e0d36be0
 * 用户在没有初始化的时候运行了脚本，需要帮助用户初始化
 * 1. 先检查项目node_modules是否存在，不存在，则直接运行初始化脚本，并缓存当前package.json
 * 2. 再检查是否存在缓存的package.json文件，不存在也视为版本有差异，初始化后缓存
 * 3. 如果缓存的package.json存在，则检查其中的devDependencies和dependencies每项是否一致，并且keys都能对应得上。否则初始化，并更新缓存
 */
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
function updateLib() {
  const cmd_yarn = "yarn run install:yarn"; //优先运行yarn -i
  const cmd_npm = "npm run install:npm"; // 如果上面的运行失败了，再降级运行这行
  spawn(cmd_npm, {
    stdio: "inherit",
    shell: true,
  }).addListener("exit", (code) => {
    if (code !== 0) {
      spawn(cmd_yarn, {
        stdio: "inherit",
        shell: true,
      });
    }
  });
}
(function () {
  const __dirname = path.resolve();
  const packagePath = path.join(__dirname, "package.json"); //原始package.json路径
  const catchPath = path.join(__dirname, ".catch"); //缓存的package.json路径
  const node_modulesPath = path.join(__dirname, "node_modules");
  const packageCatchPath = `${catchPath}/package.json.catch`;
  let packageJson;
  //缓存功能实现函数
  function writeCatch() {
    try {
      fs.writeFileSync(packageCatchPath, JSON.stringify(packageJson, null, ""));
    } catch (error) {
      console.error("package.json缓存文件写入失败");
    }
  }
  try {
    packageJson = JSON.parse(fs.readFileSync(packagePath, "utf-8"));
  } catch (error) {
    // eslint-disable-next-line no-throw-literal
    throw "包文件读取错误!";
  }
  if (!fs.existsSync(catchPath) || !fs.existsSync(node_modulesPath)) {
    if (!fs.existsSync(catchPath)) fs.mkdirSync(catchPath);
    updateLib();
    writeCatch();
  } else if (!fs.existsSync(packageCatchPath)) {
    updateLib();
    writeCatch();
  } else {
    try {
      const packageCatchJson = JSON.parse(
        fs.readFileSync(packageCatchPath, "utf-8")
      );
      const packageCatchLibs = Object.assign(
        Object.assign({}, packageCatchJson.dependencies),
        packageCatchJson.devDependencies
      );
      const packageLibs = Object.assign(
        Object.assign({}, packageJson.devDependencies),
        packageJson.dependencies
      );
      const pcjks = Object.keys(packageCatchLibs);
      const pjksStack = Object.keys(packageLibs);
      let check = true;
      //对比对应key的value（也就是版本）是否相同，一旦不相同，就更新它
      while (pjksStack.length) {
        const lib = pjksStack.pop();
        if (
          !packageCatchLibs[lib] ||
          packageCatchLibs[lib] !== packageLibs[lib]
        ) {
          console.log(
            `update lib[${lib}] => { package: ${packageLibs[lib]}, packageCatch: ${packageCatchLibs[lib]}}`
          );
          check = false;
          break;
        }
        pcjks.splice(pcjks.indexOf(lib), 1);
      }
      if (!check || pcjks.length) {
        console.log("检查到package依赖库有更新，正在执行更新操作......");
        updateLib();
        writeCatch();
      }
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `缓存文件格式错误，请删除[${packageCatchPath}]后再试`;
    }
  }
  console.log("✅ 依赖检查完毕");
})();
