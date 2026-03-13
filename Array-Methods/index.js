let Arr=[1,2,3,4,5,6,7,8,9,10]
// forEach is used to iterate over an array and perform a specified action on each element. It does not return a new array, but it allows you to execute a function for each element in the array.
Arr.forEach((element)=>{
    console.log(element*2);
})

// map is used to create a new array by applying a specified function to each element of the original array. It returns a new array with the results of the function applied to each element.
let newArr=Arr.map((element)=>{
    return element*2;
})
console.log(newArr);

// filter is used to create a new array with all elements that pass a test implemented by a provided function. It returns a new array with the elements that satisfy the condition.
let filteredArr=Arr.filter((element)=>{
    return element%2===0;
})

console.log(filteredArr);

// reduce is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It returns a single value that is the result of the reduction.
let sum=Arr.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
},0)

console.log(sum);

// find is used to return the value of the first element in the array that satisfies the provided testing function. It returns the value of the first element that matches the condition, or undefined if no such element is found.
let foundElement=Arr.find((element)=>{
    return element>5;
})

console.log(foundElement);

// some is used to test whether at least one element in the array passes the test implemented by the provided function. It returns true if at least one element satisfies the condition, otherwise it returns false.
let hasEven=Arr.some((element)=>{
    return element%2===0;
})
console.log(hasEven);

// every is used to test whether all elements in the array pass the test implemented by the provided function. It returns true if all elements satisfy the condition, otherwise it returns false.
let allEven=Arr.every((element)=>{
    return element%2===0;
})
console.log(allEven);

