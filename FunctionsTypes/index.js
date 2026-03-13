// Functions and their types in JavaScript

// there are multiple types of functions in JavaScript, including:
// 1. common functions
// 2. anonymous functions
// 3. arrow functions
// 4. generator functions
// 5. async functions
// 6. pure functions
// 7. higher-order functions
// 8. Self-invoking functions


// 1. Common Functions: These are the standard functions that we define using the function keyword. They can be named or anonymous.
function add(a, b) {
    return a + b;
}

// 2. Anonymous Functions: These are functions that do not have a name. They are often used as arguments to other functions or assigned to variables.
const multiply = function(a, b) {
    return a * b;
};

// 3. Arrow Functions: These are a more concise syntax for writing functions. They do not have their own this context and are often used for shorter functions.
const divide = (a, b) => a / b;

// 4. Generator Functions: These are functions that can be paused and resumed, allowing them to generate a sequence of values over time. They are defined using the function* syntax.
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

// 5. Async Functions: These are functions that return a promise and can be used with the await keyword to handle asynchronous operations more easily. They are defined using the async keyword.
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// 6. Pure Functions: These are functions that always produce the same output for the same input and have no side effects. They do not modify any external state.
function pureFunction(x) {
    return x * 2;
}

// 7. Higher-Order Functions: These are functions that take other functions as arguments or return functions as their result. They are a fundamental concept in functional programming.
function higherOrderFunction(func) {
    return function(x) {
        return func(x) + 1;
    };
}

// 8. Self-Invoking Functions: These are functions that are defined and immediately invoked. They are often used to create a new scope and avoid polluting the global namespace.
(function() {
    console.log('This is a self-invoking function');
})();


// Usage and getting the output of these functions can be done as follows:
console.log(add(2, 3));
console.log(multiply(2, 3));
console.log(divide(6, 3));
const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
fetchData().then(data => console.log(data)).catch(error => console.error('Fetching error : ',error));
console.log(pureFunction(4));
const increment = higherOrderFunction(x => x * 2);
console.log(increment(5));
