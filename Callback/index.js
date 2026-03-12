// const myFunction = (callback) => {
//     console.log("Inside myFunction");
//     callback();
// }
// myFunction(() => {
//     console.log("Inside callback function");
// })


// callbacks are functions that are passed as arguments to other functions and are executed after a certain event or operation is completed. They are commonly used in asynchronous programming to handle tasks that take time to complete, such as API calls, file reading, or timers.

console.log("Before setTimeout");
setTimeout(() => {
    console.log("Api 1 called");
    setTimeout(()=>{
        console.log("Api 2 called");
        setTimeout(() => {
            console.log("Api 3 called");
        }, 1000);
    }, 1000);
}, 1000);


// this nested structure leads to callback hell and makes the code difficult to read and maintain. It is often referred to as "callback pyramid of doom". To avoid this, we can use Promises or async/await to handle asynchronous operations in a more readable and maintainable way.
// for learning please go to Promises and Async Await folders.