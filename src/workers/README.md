## feat WebWorker
1、在当前文件夹下新建一个文件（createXXXWoker.js），该文件内主要为处理数据的函数，要有返回值
例如：(createTestWorker.js)
```js
    import {defined} from "../utils/objectUtils.js";
    import createTaskProcessorWorker from './createTaskProcessorWorker.js'
    function createTestWorker(parameters, transferableObjects){
    if(defined(parameters)){
        return {name:'wangwu',age:21};
    }
    return {name:'lisi',age:23};
    }
    export default createTaskProcessorWorker(createTestWorker);
```
Note:
1、import可以引入需要的文件
2、需要return parseResult
3、export default createTaskProcessorWorker(createTestWorker);这里导出必须要经过createTaskProcessorWorker包装一下

## use
1、引入
```js
     import TaskProcessor from "../scene/core/TaskProcessor.js";
```
2、实例化
```js
     this.worker=new TaskProcessor('createTestWorker',3);
```
3、传参
```js
     const workerPromise= this.worker.scheduleTask({
      data:[1,2,3,4],
      name:'zhangsan',
      age:12
    });
```
3、接受处理返回值
```js
    Promise.resolve(workerPromise)
    .then(function (packedResult) {
        debugger
    }).catch(function(error){
        debugger
    });
```
