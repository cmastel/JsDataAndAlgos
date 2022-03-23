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
            return;
        }
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = new Node(val);
        this.length += 1;
    }

    contains(target) {
        let curr = this.head;
        while (curr !== null) {
            if (curr.data === target)
                return true;
            curr = curr.next;
        }
        return false;
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