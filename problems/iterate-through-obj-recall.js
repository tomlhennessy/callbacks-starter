/* Write a function that prints out all key-value pairs of an object. The format should be 'key - value'. */
function printObject(obj) {
    // loop through each key in object
    for (let key in obj) {
        // access the value corresponding to the current key
        let value = obj[key];
        // print the key-value pair
        console.log(key + ' - ' + value);
    }
}
