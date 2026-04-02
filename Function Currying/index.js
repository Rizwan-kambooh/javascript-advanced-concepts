// function currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions that each take a single argument. This allows for partial application of functions, where you can fix some arguments and create new functions with the remaining arguments.

// Here's an example of how to implement currying in JavaScript:

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      }
    }
  };
}

// Example usage:
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3));
// In this implementation, the `curry` function takes a function `func` as an argument and returns a new function `curried`. The `curried` function checks if the number of arguments passed is sufficient to call the original function. If it is, it calls the original function with the provided arguments. If not, it returns another function that takes additional arguments and combines them with the previously provided arguments until there are enough to call the original function.