// ==========================================
// DESTRUCTURING EXAMPLE
// ==========================================
// Destructuring is the unpacking of values from arrays or objects into separate variables.
// We can also use the rest operator to collect remaining elements into a new array.

// Example: Array Destructuring
const arr = [1, 2, 3, 4, 5];
const [elem1, elem2, ...remaining] = arr;

// Display the destructured values
console.log('elem1:', elem1);      // Output: 1
console.log('elem2:', elem2);      // Output: 2
console.log('remaining:', remaining); // Output: [3, 4, 5]
