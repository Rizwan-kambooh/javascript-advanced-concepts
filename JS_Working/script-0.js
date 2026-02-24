// JS Under the hood (GLOBAL EXICUTION CONTEXT)
console.log(`Value of x is ${x}`);
var x = 10;

// ........................Working Of JS.........................
// STEP#1: whenever we try to run js code it create a global exicution context.so this context has two phases one is memory phase and second is code/thread phase
// Step#2: After creating the exicution context js reads the complete code of js and then it loads all the variables in the memory phase with initial value undefined not actual value (as of now we have only one so this will be loaded in the memory phase which is var x with initial value undefined)
// STEP#3: Now the code phase starts reading code line by line as JS is single-threaded so it tries to use the x variable from the memory phase
// STEP#4: So as it is runing line by line so firstly it consoles the value of X undefined as it is at begining and then it sets the vlaue 10 as it is set after the console
// STEP#5: Now as we are creating this variable after the console so if we assign the any value to the x before the console.log it wil print that value of x as it is read line by line so it will set the value of x as it will be assigned above the conole.log
// STEP#6: But in the case of the function the whole function is hoisted in the memory phase so we can use it anywhere to read more go to script-1.js



//NOTE: Variables declared with let and const are also hoisted but they cannot be Access it before its declaration because of Temoral Dead Zone(TDZ)
// it means if we try to use the variable (Declared with let or const) above its declaration whether we try to assign its value or use it anywhere it will give referance error because of the TDZ