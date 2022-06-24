// import { linearSearch } from "./search";
const search = require('./Algorithms/search');
const ll = require('./DataStructures/linkedList');
const s = require('./DataStructures/stack');
const q = require('./DataStructures/queue');


const myQueue = new q.Queue();
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.enqueue('d');
myQueue.print();

console.log(myQueue.dequeue());
myQueue.print();


// const list = new ll.LinkedList();
// list.append('a');
// list.append('b');
// list.append('c');
// list.append('d');
// list.print();

// list.delete('b');
// list.print();

// const myStack = new s.Stack();
// myStack.push('a');
// myStack.push('b');
// myStack.push('c');
// console.log(myStack.top)
// console.log(myStack.length)
// myStack.print();

// console.log(myStack.pop());
// console.log(myStack.length)
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.length)
// console.log(myStack.pop());
// myStack.print();
