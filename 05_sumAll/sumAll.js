const sumAll = function(a,b) {
    if (typeof(a)!== "number" || typeof(b) !== "number") {return "ERROR"}
    if (a < 0 || b < 0) {return "ERROR"}
    
    let small;
    let large;
    let sum = 0;

    if (a<=b) {
        small = a;
        large = b;
    }
    else {
        small = b;
        large = a;
    }

    for (let i = small; i <= large; i++) {
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
