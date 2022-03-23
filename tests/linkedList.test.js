const ll = require('../linkedList');

const list = new ll.LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
// list.print();

test('linkedList contains "a"', () => {
    expect(list.contains('a')).toBeTruthy();
});

test('linkedList contains "d"', () => {
    expect(list.contains('d')).toBeTruthy();
});

test('linkedList contains "x"', () => {
    expect(list.contains('x')).toBeFalsy();
});

test('linkedList contains 4', () => {
    expect(list.contains(4)).toBeFalsy();
});

test('linkedList has a length of 4', () => {
    expect(list.length).toBe(4);
});

test('newList has a length of 0', () => {
    const newList = new ll.LinkedList()
    expect(newList.length).toBe(0);
});

