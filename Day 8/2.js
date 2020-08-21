function example() {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
  }
  
  
  function example1() {
    console.log("1");
    console.log("2");
  
    setInterval(() => {
      console.log("3. I am callback", new Date());
    }, 2000);
  
    console.log("4");
    console.log("5");
  }