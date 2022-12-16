const reverseString = function(string) {
    let stringArray = string.split("");
    let reverseArray = [];
    for (let i = 0; i < stringArray.length; i++){
        reverseArray[i] = stringArray [(stringArray.length-1) - i];
    }
    return reverseArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
