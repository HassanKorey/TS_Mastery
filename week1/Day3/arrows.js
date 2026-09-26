// Rewrite three functions three ways to feel the syntax. Take a simple add:

  function add(a, b) { return a + b; }              // declaration
  const add2 = function(a, b) { return a + b; };    // expression
  const add3 = (a, b) => a + b;                      // arrow, implicit return

// Confirm all three give the same answer. Then defaults:

  function greet(name = "friend") {
    return `Hello, ${name}`;
  }
  console.log(greet());        // Hello, friend
  console.log(greet("Ada"));   // Hello, Ada
