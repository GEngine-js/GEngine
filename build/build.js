const path = require("path");
const { rollup } = require("rollup");
const { terser } = require("rollup-plugin-terser");
const rollupCommonjs = require("@rollup/plugin-commonjs");
const rollupResolve = require("@rollup/plugin-node-resolve");
const rimraf = require("rimraf");
const glob = require("glob");
/**
 * Bundles the workers and outputs the result to the specified directory
 * @param {Object} options
 * @param {boolean} [options.minify=false] true if the worker output should be minified
 * @param {boolean} [options.removePragmas=false] true if debug pragma should be removed
 * @param {boolean} [options.sourcemap=false] true if an external sourcemap should be generated
 * @param {String} options.path output directory
 * @returns {Promise.<*>}
 */
async function buildWorkers(options) {
  // delete worker files
  const outputDirectory = path.join(options.path, "workers");
  rimraf.sync(outputDirectory);
  // Copy existing workers
 const workers= await glob.sync(options.copyFilePath)
  const files= await glob.sync(options.buildFilePath);
  const plugins = [rollupResolve.nodeResolve({ preferBuiltins: true }), rollupCommonjs()];
  const pluginsc = [];
  if (options.minify) {
    plugins.push(terser());
    pluginsc.push(terser());
  } 
  //copy workerUtils
  await startRollup({
    path:options.path,
    files:workers,
    plugins:pluginsc,
    format:"es"
  })
  //build worker
  await startRollup({
    path:options.path,
    files:files,
    plugins:plugins,
    format:"amd"
  })
}
async function startRollup(options){
  const bundle = await rollup({
    input: options.files,
    plugins: options.plugins,
    onwarn: rollupWarning,
  });

  bundle.write({
    dir: path.join(options.path, "workers"),
    format: options.format,
    // Rollup cannot generate a sourcemap when pragmas are removed
    sourcemap: options.sourcemap && !options.removePragmas,
  });
}
function rollupWarning(message) {
  // Ignore eval warnings in third-party code we don't have control over
  if (message.code === "EVAL" && /protobufjs/.test(message.loc.file)) {
    return;
  }

  // console.log(message);
}
(async function () {
  //output Dir
  const outputDirectory = "public";
  const copyFilePath="src/wokerUtils/*.js";
  const buildFilePath="src/workers/*.js";
  //start build
  await buildWorkers({
    minify: true,
    sourcemap: false,
    path: outputDirectory,
    removePragmas: false,
    copyFilePath:copyFilePath,
    buildFilePath:buildFilePath
  });
})();
