// closure are the functions that are defined inside another function and have access to the variables of the outer function, even after the outer function has finished executing. They are created when a function is defined inside another function and can be used to create private variables and functions.
function outerFunction() {
    let outerVariable = 'I am from the outer function';
    return function innerFunction(){
        return outerVariable;
    }
}
const closureFunction = outerFunction();
console.log(closureFunction()); // logs: 'I am from the outer function'