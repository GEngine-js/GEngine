import {defined} from "./ObjectUtils.js";
let a;

/**
 * Given a URL, determine whether that URL is considered cross-origin to the current page.
 *
 * @private
 */
function isCrossOriginUrl(url) {
  if (!defined(a)) {
    a = document.createElement("a");
  }

  // copy window location into the anchor to get consistent results
  // when the port is default for the protocol (e.g. 80 for HTTP)
  a.href = window.location.href;

  // host includes both hostname and port if the port is not standard
  const host = a.host;
  const protocol = a.protocol;

  a.href = url;
  // IE only absolutizes href on get, not set
  // eslint-disable-next-line no-self-assign
  a.href = a.href;

  return protocol !== a.protocol || host !== a.host;
}
let aDom;
function tryMakeAbsolute(url) {
    if (typeof document === "undefined") {
        //Node.js and Web Workers. In both cases, the URL will already be absolute.
        return url;
    }

    if (!aDom) {
      aDom = document.createElement("a");
    }
    aDom.href = url;

    // IE only absolutizes href on get, not set
    // eslint-disable-next-line no-self-assign
    aDom.href = aDom.href;
    return aDom.href;
}
function getBaseUrlFromScript() {
  const engineName='calculate.js';
    const scripts = document.getElementsByTagName("script");
    for (let i = 0, len = scripts.length; i < len; ++i) {
        const src = scripts[i].getAttribute("src");
        const result = src.includes(engineName);
        if (result !== null) {
            return src;
        }
    }
    throw new Error('engineName is not exist');;
}
function  buildWorkerUrl(relativeUrl){
  if(!buildWorkerUrl.baseWorkerUrl) {
   let scriptBaseUrl=tryMakeAbsolute(getBaseUrlFromScript());
   const lastSplitIndex=scriptBaseUrl.lastIndexOf('/');
   scriptBaseUrl=scriptBaseUrl.slice(0,lastSplitIndex);
   const baseUrl=window.workerBaseUrl?window.workerBaseUrl:scriptBaseUrl;
    buildWorkerUrl.baseWorkerUrl=baseUrl.concat('/workers');
    buildWorkerUrl.baseUrl=baseUrl;
  }
  return buildWorkerUrl.baseUrl.concat('/'+relativeUrl)
}

function requestWasmFile(url){
  fetch(url,{
      method: 'get',
      responseType: 'arraybuffer'
  }).then(res => {     
      return res.arrayBuffer();
  })  
}
export {isCrossOriginUrl,buildWorkerUrl,requestWasmFile};