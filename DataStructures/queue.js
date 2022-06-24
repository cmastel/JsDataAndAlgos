class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue is a First-In-First-Out (FIFO) data structure
class Queue {
    #front;
    #back;
    #length;

    constructor() {
        this.#front = null;
        this.#back = null;
        this.#length = 0;
    }

    // add to back of queue
    enqueue(val) {
        const newNode = new QueueNode(val);
        if (this.#length === 0) {
            this.#front = newNode;
            this.#back = newNode;
        } else {
            this.#back.next = newNode;
            this.#back = newNode;
        };
        this.#length++;
    }

    // remove from front of queue
    dequeue() {
        if (this.#length === 0)
            return undefined;
        if (this.#length === 1)
            this.#back = null;
        const removedNode = this.#front;
        this.#front = this.#front.next;
        this.#length--;
        return removedNode.data;
    }

    getFront() {
        return this.#front ? this.#front.data : null;
    }

    getBack() {
        return this.#back ? this.#back.data : null;
    }

    length() {
        return this.#length;
    }

    print() {
        let str = '';
        str += this.#print(this.#front);
        console.log(str);
    }

    #print(curr) {
        if (curr === null)
            return '';
        return curr.data + ' -> ' + this.#print(curr.next)
    }
}

module.exports.Queue = Queue;