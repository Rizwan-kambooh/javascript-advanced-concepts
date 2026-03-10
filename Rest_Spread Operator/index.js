// rest operator
// rest operator is used to copy the remaining elements from an array or object into new array

const myFunc=(elem1,elem2,...remainingElem)=>{
    console.log(elem1);
    console.log(elem2);
    console.log(remainingElem);
}
myFunc(1,2,3,4,5,6,7,8);

// spread Operator expands / spreads the values of the array or the object
const User={
    name:'Rizwan',
    age:'21',
    exp:'1 yr'
};
const newUser={
    ...User,
    skills:'front-End Dev'
}
console.log(newUser)