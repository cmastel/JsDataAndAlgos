class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(val) {
        if (this.length === 0) {
            this.top = new StackNode(val);
        } else {
            const pushedNode = new StackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
        }
        this.length++;
    }

    pop() {
        if (this.length === 0)
            return undefined;
        const poppedNode = this.top;
        this.top = this.top.next;
        this.length--;
        return poppedNode.data;
    }

    print() {
        let str = '';
        str += this.#print(this.top);
        console.log(str);
    }

    #print(curr) {
        if (curr === null)
            return '';
        return curr.data + ' -> ' + this.#print(curr.next)
    }
}

module.exports.Stack = Stack;