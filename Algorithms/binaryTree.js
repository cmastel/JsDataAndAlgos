const q = require('../DataStructures/queue');

module.exports.breadthFirstPrint = function(root) {
    const queue = new q.Queue();
    queue.enqueue(root);

    while (queue.length() > 0) {
        const curr = queue.dequeue();
        console.log('curr', curr.data)
        if (curr.left) 
            queue.enqueue(curr.left);
        if (curr.right)
            queue.enqueue(curr.right);
    }
}

module.exports.breadthFirstSearch = function(root, target) {
    const queue = new q.Queue();
    queue.enqueue(root);
    while (queue.length() > 0) {
        const curr = queue.dequeue();
        if (curr.data === target)
            return true;
        if (curr.left)
            queue.enqueue(curr.left);
        if (curr.right)
            queue.enqueue(curr.right);
    }
    return false;
}

module.exports.breadthFirstSum = function(root) {
    const queue = new q.Queue();
    queue.enqueue(root);
    let sum = 0;
    while (queue.length() > 0) {
        const curr = queue.dequeue();
        sum += curr.data;
        if (curr.left)
            queue.enqueue(curr.left);
        if (curr.right) 
            queue.enqueue(curr.right);
        
    }
    return sum;
}

module.exports.depthFirstPrint = function(root) {
    // depthFirst traversal uses Stack instead of Queue, therefore we can use the call stack
    // instead of our own Stack DataStructure (which would look very similar to breadthFirst above)
    if (root === null)
        return;

    // pre-order
    console.log(root.data);
    this.depthFirstPrint(root.left);
    this.depthFirstPrint(root.right);

    // post-order
    // this.depthFirstPrint(root.left);
    // this.depthFirstPrint(root.right);
    // console.log(root.data);

    // in-order
    // this.depthFirstPrint(root.left);
    // console.log(root.data);
    // this.depthFirstPrint(root.right);
}

module.exports.depthFirstSum = function(root) {
    if (root === null) 
        return 0;
    return this.depthFirstSum(root.left) + root.data + this.depthFirstSum(root.right);
}