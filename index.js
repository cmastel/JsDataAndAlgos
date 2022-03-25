// import { linearSearch } from "./search";
const search = require('./search')
const ll = require('./linkedList')


const list = new ll.LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.print();

console.log(list.contains('b'))
console.log(list.contains('a'))
console.log(list.contains('d'))
console.log(list.contains('f'))