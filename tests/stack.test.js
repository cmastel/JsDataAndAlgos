const stack = require('../DataStructures/stack');

const createStack = function() {
    const myStack = new stack.Stack();
    myStack.push('a');
    myStack.push('b');
    myStack.push('c');
    myStack.push('d');
    return myStack;
}

test('Stack contains expected 4 elements', () => {
    const myStack = createStack();
    expect(myStack.length).toBe(4);
});

test('empty Stack has a length of 0', () => {
    const myStack = new stack.Stack();
    expect(myStack.length).toBe(0);
});

test('empty Stack pop returns false', () => {
    const myStack = new stack.Stack();
    expect(myStack.pop()).toBeFalsy();
});

test('Stack pop reduces length by one', () => {
    const myStack = createStack();
    expect(myStack.length).toBe(4);
    expect(myStack.pop()).toBe('d');
    expect(myStack.length).toBe(3);
});
