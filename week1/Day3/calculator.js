// MINI-BUILD: CALCULATOR MODULE (file: calculator.js)

// Four functions, each returning its result: add(a, b), subtract(a, b), multiply(a, b), divide(a, b).

// Then the important one, a higher-order function:
function add(a,b){
    return a + b;
}

function multiply(a,b){
    return a * b;
}

function subtract(a,b){
    return a - b;
}

function divide(a,b){
   
   if (a === 0 && b === 0){
        console.log("Both Values are 0, hence, 0")
         return
    }
    else if (b === 0){
        console.log("Divisor is 0, hence, infinity")
         return
    }
    return a/b;
}

  function calculate(operation, a, b) {
    return operation(a,b);
  }


  console.log(calculate(add, 5, 3));      // 8
  console.log(calculate(multiply, 5, 3)); // 15
   console.log(calculate(subtract, 5, 3)); 
    console.log(calculate(divide, 0, 0)); 

// Notice what you are passing to calculate: not the result of add, but add itself, the function, with no parentheses. 
// calculate then calls it inside. This is the whole idea of a higher-order function, a function that takes another function as an argument.
// It feels strange the first time. Sit with it, because map, filter, and reduce tomorrow are exactly this same move.

// Stretch: make divide return a sensible message instead of Infinity when b is 0. Which day 2 tool do you reach for first inside divide?

// WHAT TO DO

// Build all four files. Post closures.js first (with your written answer to the closure question) and calculator.js, because those two are where the real learning is.
// I will review before you move on. If the closure question is fuzzy, say so instead of guessing, that one is worth getting fully right.