const square = function(x) {
    return x * x;
};

//console.log(square(12));

const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();

const square2 = x => x*x;
//console.log(square2(33));

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

//console.log(power(4));
//console.log(power(2,6));

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
//console.log(twice(5));

function power2(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power2(base, exponent-1);
    }
}

//console.log(power2(2,3));

// minimum
function min(one, two) {
    if (one <= two) {
        return one;
    } else {
        return two;
    }
}
//console.log(min(0,10));
//console.log(min(0,-10));

function isEven(num) {
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else {
        return (isEven(num - 2));
    }
}
//console.log(isEven(50));
//console.log(isEven(75));
//console.log(isEven(-1));

function countBs(string) {
    let i = 0;
    let bs = 0;
    while (i < string.length) {
        if (string[i]=="B") {
            ++bs;
        }
        ++i;
        //console.log("looping");
    }
    return bs;    
}
console.log(countBs("BBC"));
