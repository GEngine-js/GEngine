import calculate from './calculate.js';

document.getElementById("btn").onclick = () => {
      const cal=new calculate();
      const promise =cal.startTaskworker();
      Promise.resolve(promise)
      .then(function (result) {
          alert(result)
      }).catch(function(error){
          alert(error)
      });
  };