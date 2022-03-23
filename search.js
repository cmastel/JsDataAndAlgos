module.exports.linearSearch = (array, target) => {
    // returns the index of the target element in the supplied array
    for(let i = 0; i < array.length; i ++) {
        if (array[i] === target)
            return i; 
    }
    return -1;
}

module.exports.binarySearch = (array, target) => {
    // returns the index of the target element in the supplied array
    // assumes that array is sorted
    let first = 0;
    let last = array.length - 1;
    while(first <= last) {
        let mid = Math.floor((last + first) / 2);
        if(array[mid] === target)
            return mid;
        if(array[mid] < target) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
    }
    return -1;
}