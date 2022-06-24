const q = require('../DataStructures/queue');

const createQueue = function() {
    const myQueue = new q.Queue();
    myQueue.enqueue('a');
    myQueue.enqueue('b');
    myQueue.enqueue('c');
    myQueue.enqueue('d');
    return myQueue;
}

test('Queue contains expected 4 elements', () => {
    const myQueue = createQueue();
    expect(myQueue.length()).toBe(4);
});

test('empty Queue has a length of 0', () => {
    const myQueue = new q.Queue();
    expect(myQueue.length()).toBe(0);
});

test('empty Queue dequeue returns false', () => {
    const myQueue = new q.Queue();
    expect(myQueue.dequeue()).toBeFalsy();
});

test('Queue dequeue reduces length by one', () => {
    const myQueue = createQueue();
    expect(myQueue.length()).toBe(4);
    expect(myQueue.dequeue()).toBe('a');
    expect(myQueue.length()).toBe(3);
});

test('after dequeue, front of queue is not the dequeued element', () => {
    const myQueue = createQueue();
    expect(myQueue.dequeue()).toBe('a');
    expect(myQueue.getFront()).toBe('b');
});

test('after dequeue of single element Queue, front and back are null', () => {
    const myQueue = new q.Queue();
    myQueue.enqueue('a');
    expect(myQueue.getFront()).toBe('a');
    expect(myQueue.getBack()).toBe('a');
    expect(myQueue.dequeue()).toBe('a');
    expect(myQueue.getFront()).toBe(null);
    expect(myQueue.getBack()).toBe(null);
})
