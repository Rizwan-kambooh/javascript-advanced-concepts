// so as the post message from the main.js was to start the worker thread to perform the heavy computation, we will listen for that message in the worker.js file and when we receive it, we will start the heavy computation in the worker thread. Then we will post a message back to the main thread with the result of the computation.

self.onmessage = function(event) {
  if (event.data === 'start') {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      // Simulating a heavy computation
      sum += i;
    }
    self.postMessage(sum); // posting the result back to the main thread
  }
}

// in this code, we are listening for a message from the main thread using self.onmessage. When we receive a message, we check if it is the 'start' message that we sent from the main thread. If it is, we start the heavy computation in the worker thread and when it is done, we post a message back to the main thread with the result of the computation using self.postMessage(sum).
// so the event that we are passing to the onmessage function contains the data that we sent from the main thread, which in this case is the string 'start'. We can use this data to determine what action to take in the worker thread. In this case, we are checking if the data is 'start' and if it is, we are performing the heavy computation and posting the result back to the main thread.
// so we are using this event to communicate between the main thread and the worker thread. The main thread sends a message to the worker thread to start the computation, and the worker thread listens for that message and performs the computation when it receives it. Then the worker thread posts a message back to the main thread with the result of the computation, which we can listen for in the main thread using worker.onmessage.