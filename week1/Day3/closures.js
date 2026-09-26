

  function makeCounter() {
    // declare count here
    let count = 0
    count++
    // return a function that increments and returns count
    return count
  }

  const counter = makeCounter();
  console.log(counter); // 1
  console.log(counter); // 2
  console.log(counter); // 3

// Then prove each counter is independent:

  const counter2 = makeCounter();
  console.log(counter2); // 1, not 4
  console.log(counter);  // 4, the first counter kept going

// The question you must answer in your own words, written as a comment at the bottom of the file: makeCounter() has already finished running by the time you call counter(). So why does count still exist? Where is it living? If you can answer that, you own closures. If you cannot, do not move on, tell me and we will work it out. This is the concept everything in week 4 (generics) rests on.
