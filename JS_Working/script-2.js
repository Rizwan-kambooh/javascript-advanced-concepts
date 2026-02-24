// Call stack
console.log("Script started")
setTimeout(()=>{
    console.log('Script inside setTimout first');
},0)
setTimeout(()=>{
    console.log('Script inside setTimout second');
},0)
Promise.resolve().then(()=>{
    console.log("Promise resolved with micro task queue(Promise)")
})
console.log("Script ended");



// in this tuturial we learned how the js runs synchronous and Asynchrounus code
// so whenever any code is exicuted it moves to the call stack where every single line is exicuted line by line with LIFO principle
//STEP#1: so the console will be printed "console.log("Script started")"
// STEP#2: Now there is async code here at second postion so this code will be moved to the Web Api which handle async code
// STEP#3: Now as the async code is moved to another place (WEB API) so now the last console.log("Script ended") will be consoled
// STEP#4: Now as the call stack completes its non blocking tasks the WEB API also try to complete the timer of the async code side by side 
// STEP#5: SO as the web apis completes its task for blocking code this code goes to the Task Queue(FIFO Principle) from where it will be loaded in call stack again when it gets empty with help of event loop
// STEP#6: SO now the the remaining code will also be exicuted

// NOTE: In this as there are two queues for the async codes so the promise goes to micro task queue not in the callback queue
// SO the tasks that are in micro task queue get high priority means they will be exicuted before the callback queue


// what goes to Micro-Task queue is instead of the web apis 
// Promises   go to the micro task queue direclty instead of going to the web apis
// What goes in Macro-Taks queue
//Timeouts, Intervals, Dom Events(Click,scrol etc), I/O Operations



