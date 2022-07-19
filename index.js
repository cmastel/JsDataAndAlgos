// import { linearSearch } from "./search";
const search = require('./Algorithms/search');
const bt = require('./Algorithms/binaryTree');
const ll = require('./DataStructures/linkedList');
const s = require('./DataStructures/stack');
const q = require('./DataStructures/queue');
const bn = require('./DataStructures/binaryTree');


const a = new bn.BinaryNode(2);
const b = new bn.BinaryNode(5);
const c = new bn.BinaryNode(8);
const d = new bn.BinaryNode(-1);
const e = new bn.BinaryNode(-2);
const f = new bn.BinaryNode(9);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

// bt.breadthFirstPrint(a);
// console.log('bfs e', bt.breadthFirstSearch(a, 'e'));
// console.log('bfs z', bt.breadthFirstSearch(a, 'z'));
// console.log('bfSum', bt.breadthFirstSum(a))
// bt.depthFirstPrint(a);
console.log(bt.depthFirstSum(a));

// const myQueue = new q.Queue();
// myQueue.enqueue('a');
// myQueue.enqueue('b');
// myQueue.enqueue('c');
// myQueue.enqueue('d');
// myQueue.print();

// console.log(myQueue.dequeue());
// myQueue.print();


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
