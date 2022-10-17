export function requestWasmFile(url):Promise<Object>{
    //@ts-ignore
    return fetch(url, {method: 'get', responseType: 'arraybuffer'}).then(res => {
        return res.arrayBuffer();
    });  
  }