const ll = require('../DataStructures/linkedList');

const createList = function() {
    const list = new ll.LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    return list;
}

test('linkedList contains expected elements', () => {
    const list = createList();
    expect(list.length).toBe(4);
    expect(list.contains('a')).toBeTruthy();
    expect(list.contains('d')).toBeTruthy();
    expect(list.contains('x')).toBeFalsy();
    expect(list.contains(4)).toBeFalsy();
});

test('empty List has a length of 0', () => {
    const newList = new ll.LinkedList()
    expect(newList.length).toBe(0);
});

test('empty List delete returns false', () => {
    const newList = new ll.LinkedList()
    expect(newList.delete('a')).toBeFalsy();
});

test('linkedList delete middle element', () => {
    const list = createList();
    expect(list.length).toBe(4);
    expect(list.delete('b')).toBeTruthy();
    expect(list.length).toBe(3);
    expect(list.contains('b')).toBeFalsy();
});

test('linkedList delete first element', () => {
    const list = createList();
    expect(list.length).toBe(4);
    expect(list.delete('a')).toBeTruthy();
    expect(list.length).toBe(3);
    expect(list.contains('a')).toBeFalsy();
});

test('linkedList delete non-existant element', () => {
    const list = createList();
    expect(list.length).toBe(4);
    expect(list.delete('z')).toBeFalsy();
    expect(list.length).toBe(4);
    expect(list.contains('z')).toBeFalsy();
});
