// import { linearSearch } from "./search";
const search = require('./Algorithms/search')
const ll = require('./DataStructures/linkedList')


const list = new ll.LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.print();

list.delete('b');
list.print();