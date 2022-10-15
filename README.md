## Note:
  * vite-lib.config.js中engineName一定要与UrlUtils.js中的engineName

##  install
  * `npm install` 

##  use 
  * see src/wokers/README.md
##  build 
  * `npm run umd-build`

## example
  * `npm run umd-build`
  * 利用 live-server 等插件，运行 demo/index.html 查看效果

## In the future
    "dev": "node build/build.js && vite --config build/vite.config.js",
    "build": "node build/build.js && vite build --config build/vite.config.js",
    "preview": "node build/build.js && vite preview --config build/vite.config.js",