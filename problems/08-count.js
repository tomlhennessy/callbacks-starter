/*******************************************************************************
Write a function `count` that accepts an array and a callback as arguments. The
function should return the number of elements of the array that return true when
passed to the callback.

Examples:

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0
*******************************************************************************/

let count = function(array, cb) {
    // initialise variable to count number of elements returning true
    let countTrue = 0;

    // iterate through each element of array
    for (let i = 0; i < array.length; i++) {
        // call cb function for current element
        // if cb returns true, increment countTrue variable
        if (cb(array[i])) {
            countTrue++;
        }
    }

    // return total count of elements that return true
    return countTrue;
};

// example usage;

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = count;
