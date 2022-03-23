// import { linearSearch } from "./search";
const search = require('./search')
const ll = require('./linkedList')


const list = new ll.LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.print();

// const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log('testArray', testArray)
// console.log('linearSearch index of 4', search.linearSearch(testArray, 4));
// console.log('linearSearch index of 10', search.linearSearch(testArray, 10));
// console.log('linearSearch index of 12', search.linearSearch(testArray, 12));

// console.log('binarySearch index of 4', search.binarySearch(testArray, 4));
// console.log('binarySearch index of 10', search.binarySearch(testArray, 10));
// console.log('binarySearch index of 12', search.binarySearch(testArray, 12));