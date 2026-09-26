  let a = "global";
  
  function outer() {
    let b = "outer";
    console.log(a); // can you see a here?
    console.log(b); // and b?

    function inner() {
      let c = "inner";
      console.log(a); // a?
      console.log(b); // b?
      console.log(c); // c?
    }
    inner();
  }

  outer();
  console.log(a); // a out here?
  console.log(b); // b out here?
 