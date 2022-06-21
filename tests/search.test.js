const search = require('../Algorithms/search');

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('linearSearch of 1 is 0', () => {
    expect(search.linearSearch(testArray, 1)).toBe(0);
});

test('linearSearch of 4 is 3', () => {
    expect(search.linearSearch(testArray, 4)).toBe(3);
});

test('linearSearch of 10 is 9', () => {
    expect(search.linearSearch(testArray, 10)).toBe(9);
});

test('linearSearch of 12 is -1', () => {
    expect(search.linearSearch(testArray, 12)).toBe(-1);
});

test('binarySearch of 10 is 9', () => {
    expect(search.binarySearch(testArray, 10)).toBe(9);
});

test('binarySearch of 12 is -1', () => {
    expect(search.binarySearch(testArray, 12)).toBe(-1);
});