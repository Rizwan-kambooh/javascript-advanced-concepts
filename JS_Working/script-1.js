console.log("Global Exicution context starts");
var globalVariable="I am global variable";
console.log(globalVariable);
globalFunction();
console.log("Global Exicution context Ends");
function globalFunction(){
    console.log("Inside of global function");
}


//STEP#1: In this there are two types of declarations one is globalVariable and the other is function so the variable will go to the memory phase but not initialized and the whole functions body will load into the memory phase so it will not give undefined untill the function is not assigned to a variable 