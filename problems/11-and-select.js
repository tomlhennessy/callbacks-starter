/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]

*******************************************************************************/

let andSelect = function(array, cb1, cb2) {
    // initialise empty array to store selected items
    let selected = [];

    // iterate through each element of array
    for (let element of array) {
        // check if both cbs return true for current element
        if (cb1(element) && cb2(element)) {
            // if both cbs return true, include the element in selected array
            selected.push(element);
        }
    }

    // return array containing selected elements
    return selected;
};

// example usage:

let isEven = function (n) {
    return n % 2 === 0;
}

let isPositive = function (n) {
    return n > 0;
}

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = andSelect;
