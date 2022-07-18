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

module.exports.breadthFirstSearch = function (root, target) {
    const queue = new q.Queue();
    queue.enqueue(root);
    while (queue.length() > 0) {
        const curr = queue.dequeue();
        console.log(curr.data, target)
        if (curr.data === target)
            return true;
        if (curr.left)
            queue.enqueue(curr.left);
        if (curr.right)
            queue.enqueue(curr.right);
    }
    return false;
}

module.exports.breadthFirstSum = function (root) {
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