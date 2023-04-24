function sum(...nums) { // Accepts a variable number of arguments as an array
  let total = nums.reduce((acc, num) => acc + num, 0); // Compute the initial total from the arguments
  return function add(...args) { // return an inner function that takes a variable number of arguments
    if (args.length === 0) { // If no arguments are provided, return the current total
      return total;
    } else {
      args.forEach(arg => total += arg); // Otherwise, add up all the arguments and update the total
      return add; // Return the `add` function so it can be called again with more arguments
    }
  }
}



console.log(sum(1,2)(2,3)(4)(5,3,2)(2,3)(2,6)(8)(2)()); // Output: 45

