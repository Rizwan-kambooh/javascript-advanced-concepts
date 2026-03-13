// closure are the functions that are defined inside another function and have access to the variables of the outer function, even after the outer function has finished executing. They are created when a function is defined inside another function and can be used to create private variables and functions.
function outerFunction() {
    let outerVariable = 'I am from the outer function';
    return function innerFunction(){
        return outerVariable;
    }
}
const closureFunction = outerFunction();
console.log(closureFunction()); // logs: 'I am from the outer function'

// another example of this is:
function counter(value1) {
    return function(value2){
        return value1 * value2;
    }
}
const count1 = counter(5);
console.log(count1(2)); // logs: 10
console.log(count1(3)); // logs: 15


// another real world example of closure is when we want to create a function that generates a unique ID for each user. We can use a closure to keep track of the last ID generated and increment it each time a new ID is requested.
function createIDGenerator() {
    let lastID = 0;
    return function() {
        lastID++;
        return lastID;
    }
}
const generateID = createIDGenerator();
console.log(generateID()); // logs: 1
console.log(generateID()); // logs: 2
console.log(generateID()); // logs: 3