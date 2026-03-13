const user={
    name:'John',
    age:30,
    city:'New York',
};

// object methods
user.greet=function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
user.updateCity=function(newCity){
    this.city=newCity;
    console.log(`City updated to ${this.city}`);
}
// using the methods
user.greet();
user.updateCity('Los Angeles');


// other object methods are
// object.keys
console.log(Object.keys(user)); // ['name', 'age', 'city', 'greet', 'updateCity']
// object.values
console.log(Object.values(user)); // ['John', 30, 'Los Angeles', [Function], [Function]]
// object.entries
console.log(Object.entries(user));// [['name', 'John'], ['age', 30], ['city', 'Los Angeles'], ['greet', [Function]], ['updateCity', [Function]]]
// object.assign
const newUser=Object.assign({}, user);
console.log(newUser); // { name: 'John', age: 30, city: 'Los Angeles', greet: [Function], updateCity: [Function] }
// object.freeze
Object.freeze(user);
user.name='Jane';
console.log(user.name); // 'John' (name cannot be changed because the object is frozen)
