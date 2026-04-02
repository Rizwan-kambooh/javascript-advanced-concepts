// this keyword in javascript
//1. this keyword refers to the object that is executing the current function.
//2. It can be used to access properties and methods of the object.
//3. The value of this keyword can change depending on how the function is called.

// for example:
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
person.greet(); // Output: Hello, my name is John and I am 30 years old.

// In the above example, this keyword refers to the person object and allows us to access its properties and methods.
// However, if we assign the greet method to a variable and call it, the value of this will change:
const greetFunction = person.greet;
// greetFunction(); // Output: Hello, my name is undefined and I am undefined years old.
// In this case, this keyword refers to the global object (window in browsers) and not the person object, which is why we get undefined for name and age.

// To control the value of this keyword, we can use function methods like call, apply, and bind.
// call method allows us to call a function with a specific this value and arguments:
greetFunction.call(person); // Output: Hello, my name is John and I am 30 years old.

// apply method is similar to call, but it takes an array of arguments instead of individual arguments:
greetFunction.apply(person); // Output: Hello, my name is John and I am 30 years old.

// bind method creates a new function with a specific this value and optional initial arguments:
const boundGreetFunction = greetFunction.bind(person);
boundGreetFunction(); // Output: Hello, my name is John and I am 30 years old.