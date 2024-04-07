/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, cb = null) {
    if (!cb) {
        // if no cb is provided, return smallest value in array
        return Math.min(...array);
    } else {
        // if cb is provided, apply it to each element
        // before finding smallest value
        let minValue = cb(array[0]);
        for (let i = 1; i < array.length; i++) {
            let transformedValue = cb(array[i]);
            if (transformedValue < minValue) {
                minValue = transformedValue;
            }
        }
        return minValue;
    }
};

console.log(minValueCallback([64, 25, 49, 9, 100])); // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt)); // 3






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
