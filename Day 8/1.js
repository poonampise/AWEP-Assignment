function hello(fn) {
    fn();
  }
  
  hello();
  
  hello(1);
  
  hello("cdac");
  
  hello(function () {});
  hello(() => {});
  
  let anfn = function () {};
  hello(anfn);
  
  let arfn = () => {};
  hello(arfn);

  setInterval(function () {
    console.log("I am interval, using annonymous!!");
  }, 1000);
  
  setInterval(() => {
    console.log("I am also interval, using Arrow");
  }, 1000);
  
  let anfn = function () {
    console.log("I am getting uses as parameter inside the setinveral");
  };
  setInterval(anfn, 1000);