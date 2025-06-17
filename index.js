
const array=[1, 2, 3, 4, 5,'ahmwd','ali',122,'ali',"0201155075584"];
console.log(array);
// Array methods
// push for adding an item to the end of the array
array.push('new item');
console.log(array);
// pop for removing an item from the end of the array
array.pop();
console.log(array); //[1, 2, 3, 4, 5, 'ahmwd', 'ali', 122, 'ali']
// unshift for adding an item to the beginning of the array
array.unshift('new item at the beginning');
console.log(array); // [ 'new item at the beginning', 1, 2, 3, 4, 5, 'ahmwd', 'ali', 122, 'ali' ]
// shift for removing an item from the beginning of the array
array.shift();
console.log(array); // [ 1, 2, 3, 4, 5, 'ahmwd', 'ali', 122, 'ali' ]
// splice for adding or removing items at a specific index
array.splice(2, 0, 'new item at index 2'); // adds an item at index 2
console.log(array);
array.splice(2, 1); // removes an item at index 2
console.log(array); // [ 1, 2, 3, 4, 5, 'ahmwd', 'ali', 122, 'ali' ]
// slice for creating a new array from an existing array
const newArray = array.slice(2, 5); // creates a new array from index 2 to index 5
console.log(newArray);// [ 3, 4, 5 ]
// indexOf for finding the index of an item in the array
const index = array.indexOf('ali'); // finds the index of 'ali' in the array
console.log(index);// 6
// includes for checking if an item is in the array
const includesAli = array.includes('ali'); // checks if 'ali' is in the array
console.log(includesAli); // true

// forEach for iterating over the array
array.forEach((item, index) => {
  console.log(`Item at index ${index}: ${item}`);// logs each item with its index
});
// map for creating a new array with the results of calling a function on every element in the array
const mappedArray = array.map(item => {
  return typeof item === 'number' ? item * 2 : item; // doubles the number items
});
console.log(mappedArray);
// filter for creating a new array with all elements that pass the test implemented by the provided function
const filteredArray = array.filter(item => typeof item === 'number' && item > 2); // filters out non-number items and numbers less than or equal to 2
console.log(filteredArray);
// find for finding the first element that satisfies the provided testing function
const foundItem = array.find(item => typeof item === 'string' && item.includes('ali')); // finds the first string that includes 'ali'
console.log(foundItem);
// reduce for applying a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
const reducedValue = array.reduce((accumulator, currentValue) => {
  return typeof currentValue === 'number' ? accumulator + currentValue : accumulator; // sums up all number items
}, 0);
console.log(reducedValue); // 12 (1 + 2 + 3 + 4 + 5 + 122)
// sort for sorting the elements of an array in place and returning the sorted array
const sortedArray = array.slice().sort((a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b; // sort numbers in ascending order
  }
  return 0;
});
console.log(sortedArray);// [ 1, 2, 3, 4, 5, 122, 'ahmwd', 'ali', 'ali' ]
// reverse for reversing the elements of an array in place
const reversedArray = array.slice().reverse(); // creates a new array with the elements in reverse  order
console.log(reversedArray); // [ 'ali', 122, 'ali', 'ahmwd', 5, 4, 3, 2, 1 ]  
// join for joining all elements of an array into a string
const joinedString = array.join(', '); // joins all elements with a comma and space
console.log(joinedString); // "1, 2, 3, 4, 5, ahmwd, ali, 122, ali"
// split for splitting a string into an array of substrings
const stringToSplit = 'apple, banana, cherry';
const splitArray = stringToSplit.split(', '); // splits the string into an array of substrings
console.log(splitArray); // [ 'apple', 'banana', 'cherry' ]
// concat for merging two or more arrays
const anotherArray = ['grape', 'orange'];
const concatenatedArray = array.concat(anotherArray); // merges the original array with another array
console.log(concatenatedArray);
// findIndex for finding the index of the first element that satisfies the provided testing function
const foundIndex = array.findIndex(item => typeof item === 'string' && item.includes('ali')); // finds the index of the first string that includes 'ali'
console.log(foundIndex); // 6
// some for checking if at least one element in the array passes the test implemented by the provided function
const hasNumberGreaterThan100 = array.some(item => typeof item === 'number' && item   > 100); // checks if there is any number greater than 100
console.log(hasNumberGreaterThan100); // true
// every for checking if all elements in the array pass the test implemented by the provided function
const allNumbers = array.every(item => typeof item === 'number'); // checks if all items are numbers
console.log(allNumbers); // false (because there are strings in the array)  
// flat for flattening nested arrays
const nestedArray = [1, 2, [3, 4], [5, 6]];
const flattenedArray = nestedArray.flat(); // flattens the nested array into a single-level array
console.log(flattenedArray); // [ 1, 2, 3, 4, 5, 6 ]
// flatMap for mapping each element using a mapping function and then flattening the result into a new array
const flatMappedArray = nestedArray.flatMap(item => {
  return Array.isArray(item) ? item : [item]; // flattens the nested arrays while keeping non-array items as single elements
});
console.log(flatMappedArray); // [ 1, 2, 3, 4, 5, 6 ]
// fill for filling all elements of an array from a start index to an end index with a static value
const filledArray = array.fill('filled', 2, 5); // fills elements from index 2 to index 5 with 'filled'
console.log(filledArray); // [ 1, 2, 'filled', 'filled', 'filled', 'ahmwd', 'ali', 122, 'ali' ]
// copyWithin for shallow copying part of an array to another location in the same array
const copiedArray = array.copyWithin(0, 2, 5); // copies elements from index 2 to index 5 to the beginning of the array
console.log(copiedArray); // [ 'filled', 'filled', 'filled', 'ahmwd', 'ali', 122, 'ali' ]