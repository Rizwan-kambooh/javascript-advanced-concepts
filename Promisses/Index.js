// BIG NOTE
// Promises and settimeouts both are used to handle asynchronous operations in JavaScript. But..
// But Promises goes to micro task queue due to high priority and setTimeout goes to task queue. So, Promises will be executed before setTimeout, even if the setTimeout has a shorter delay. This is because the microtask queue has higher priority than the task queue in the event loop.


// Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never. A promise can be in one of three states: pending, fulfilled, or rejected.

const FindUser=(id) => new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log(`User found with ID: ${id}`);
        resolve({ id, name: `User ${id}` });
        reject(new Error('User not found'));
    }, 1000);
});
FindUser(1).then(user => {
    console.log(user);
}).catch(error => {
    console.error(error);
});


// Here are some Promise methods that are commonly used in JavaScript:
// 1. `then()`: This method is used to handle the fulfilled state of a promise. It takes a callback function that is executed when the promise is resolved.
// 2. `catch()`: This method is used to handle the rejected state of a promise. It takes a callback function that is executed when the promise is rejected.
// 3. `finally()`: This method is used to execute a callback function regardless of the promise's outcome (fulfilled or rejected). It is often used for cleanup operations.
// 4. `Promise.all()`: This method takes an array of promises and returns a new promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises in the array reject.
// 5. `Promise.allSettled()`: This method takes an array of promises and returns a new promise that resolves when all of the promises in the array have settled (either fulfilled or rejected), and provides an array of objects describing the outcome of each promise.
// 6. `Promise.race()`: This method takes an array of promises and returns a new promise that resolves or rejects as soon as one of the promises in the array resolves or rejects, with the value or reason from that promise.
// Example of using `Promise.all()`:


// examples of each method:

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promise4 = Promise.reject(new Error('Promise 4 failed'));

// Using then() and catch()
// then and catch() are used to handle the resolved and rejected states of a promise, respectively. In this example, promise1 is resolved successfully, while promise4 is rejected.

promise1.then(value => {
    console.log(`Promise 1 resolved with value: ${value}`);
}).catch(error => {
    console.error(`Promise 1 rejected with error: ${error}`);
});

// Using finally()
promise2.finally(() => {
    console.log('Promise 2 has settled');
}).then(value => {
    console.log(`Promise 2 resolved with value: ${value}`);
}).catch(error => {
    console.error(`Promise 2 rejected with error: ${error}`);
});

// Using Promise.all()
Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(`All promises resolved with values: ${values}`);
}).catch(error => {
    console.error(`One of the promises rejected with error: ${error}`);
});

// Using Promise.allSettled()
Promise.allSettled([promise1, promise2, promise3, promise4]).then(results => {
    console.log('All promises have settled:');
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index + 1} fulfilled with value: ${result.value}`);
        } else {
            console.error(`Promise ${index + 1} rejected with reason: ${result.reason}`);
        }
    });
});

// Using Promise.race()
Promise.race([promise1, promise4]).then(value => {
    console.log(`First promise resolved with value: ${value}`);
}).catch(error => {
    console.error(`First promise rejected with error: ${error}`);
});

