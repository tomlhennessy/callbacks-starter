/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]
*******************************************************************************/

let reject = function(array, cb) {
    // create an empty array to store rejected elements
    let rejected = [];

    // iterate through each element of input array
    for (let i = 0; i < array.length; i++) {
        // call cb function for current element
        // if cb returns false for this element, add it to rejected array
        if (!cb(array[i])) {
            rejected.push(array[i]);
        }
    }
    // return array containing rejected elements
    return rejected;

};

// example usage:

let isEven = function(n) {
    return n % 2 === 0;
};

// reject elements that are even from array
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = reject;
