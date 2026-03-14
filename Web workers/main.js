const worker = new Worker('worker.js');
// here we are creating a new web worker and passing the path to our worker.js file. This will create a new thread that will run the code in worker.js independently of the main thread.
// and keep in mind that the worker.js file should be a separate file in the same directory as main.js for this to work.


// Note: the post and on messages above the addEventListener is just for demonstration purposes so this is causing the running of the heavy computation as soon as the page loads, but in a real application you would probably want to trigger the heavy computation in response to a user action, such as clicking a button. So you can move the worker.postMessage('start'); and worker.onmessage = function(event) { ... } inside the event listener for the button click, so that the heavy computation only starts when the user clicks the button.



// and then we can communicate with the worker using postMessage and onmessage and we will read the messages sent from both sides using the event object. For example, we can send a message to the worker to start the heavy computation and then listen for a message from the worker when it is done.

worker.postMessage('start');

// sending a message to the worker to start the heavy computation
// here we are sending a message to the worker to start the heavy computation. The worker will listen for this message and when it receives it, it will start the heavy computation in the worker.js file.
// so basically this 'start' message is just a signal to the worker to start the heavy computation. You can use any string or data you want as the message, as long as the worker is set up to listen for it and respond accordingly.
// we can make this postMessage more complex by sending an object with more information, for example:
// worker.postMessage({ command: 'start', data: { /* any additional data you want to send */ } });

worker.onmessage = function(event) {
  alert(`The sum of numbers from 1 to 1000000000 is: ${event.data}`);
}

// here this event is also the data that we sent from the worker thread using self.postMessage(sum). So when the worker thread finishes the heavy computation and posts a message back to the main thread with the result, we can listen for that message using worker.onmessage and access the data using event.data. In this case, we are alerting the result of the computation when we receive it from the worker thread.
// so this event have access to the data that we sent from the worker thread using self.postMessage(sum) in the worker.js file. So when the worker thread finishes the heavy computation and posts a message back to the main thread with the result, we can listen for that message using worker.onmessage and access the data using event.data. In this case, we are alerting the result of the computation when we receive it from the worker thread.


const Calculate = document.getElementById('calculate');
const ChangeBg = document.getElementById('change-bg');

Calculate.addEventListener('click', () => {
  // let sum = 0;
  // for (let i = 0; i < 1000000000; i++) {
  //   // Simulating a heavy computation
  //   sum += i;
  // }
  // alert(`The sum of numbers from 1 to 1000000000 is: ${sum}`);

  worker.postMessage('start'); // sending a message to the worker to start the heavy computation

  worker.onmessage = function(event) {
    alert(`The sum of numbers from 1 to 1000000000 is: ${event.data}`);
  }
  
})


// so see here this heavy computation will block the main thread and make the UI unresponsive. To avoid this, we can use a web worker to perform the heavy computation in a separate thread.

// so to make that we will create a new file called worker.js and move the heavy computation code there. Then we will create a new web worker in our main.js file and communicate with it using postMessage and onmessage.
// for that please go to above code and see the worker.postMessage('start'); and worker.onmessage = function(event) { ... } to see how we are communicating with the worker.

document.body.style.backgroundColor = 'green';
ChangeBg.addEventListener('click', () => {
  if (document.body.style.backgroundColor === 'lightblue') {
    document.body.style.backgroundColor = 'green';
  }
  else {
    document.body.style.backgroundColor = 'lightblue';
  }
})