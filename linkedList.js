class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(val) {
        if (this.head === null) {
            this.head = new Node(val);
            this.length += 1;
        } else {
            this.#append(this.head, val);
        }
    }

    #append(curr, val) {
        if (curr.next === null) {
            curr.next = new Node(val);
            this.length += 1;
            return;
        }
        this.#append(curr.next, val);
    }

    contains(target) {
        return this.#contains(this.head, target);
    }

    #contains(curr, target) {
        if (curr === null)
            return false;
        if (curr.data === target)
            return true;
        return this.#contains(curr.next, target);
    }

    print() {
        let str = '';
        let curr = this.head;
        while (curr !== null ) {
            str += curr.data + ' --> ';
            curr = curr.next;
        }
        console.log(str);
    }


}

module.exports.LinkedList = LinkedList;