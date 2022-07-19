const bt = require('../Algorithms/binaryTree');
const bn = require('../DataStructures/binaryTree');

const createTreeRoot = function() {
    const a = new bn.BinaryNode(2);
    const b = new bn.BinaryNode(8);
    const c = new bn.BinaryNode(-3);
    const d = new bn.BinaryNode(5);
    const e = new bn.BinaryNode(7);
    const f = new bn.BinaryNode(-1);
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    return a;
}

// breadthFirstSearch()
test('Tree contains value: 7', () => {
    const myTreeRoot = createTreeRoot();
    expect(bt.breadthFirstSearch(myTreeRoot, 7)).toBeTruthy();
});

test('Tree does not contain value: 10', () => {
    const myTreeRoot = createTreeRoot();
    expect(bt.breadthFirstSearch(myTreeRoot, 10)).toBeFalsy();
});

test('Single Node Tree does not contain value: 10', () => {
    const myTreeRoot = new bn.BinaryNode('a');
    expect(bt.breadthFirstSearch(myTreeRoot, 10)).toBeFalsy();
});

// test('Undefined Tree does not contain value: 10', () => {
//     const myTreeRoot = undefined;
//     expect(bt.breadthFirstSearch(myTreeRoot, 10)).toBeFalsy();
// });


// breadthFirstSum()
test('Tree has accurate sum', () => {
    const myTreeRoot = createTreeRoot();
    expect(bt.breadthFirstSum(myTreeRoot)).toBe(18);
});

test('Single Node Tree has accurate sum', () => {
    const myTreeRoot = new bn.BinaryNode(0);
    expect(bt.breadthFirstSum(myTreeRoot)).toBe(0);
});