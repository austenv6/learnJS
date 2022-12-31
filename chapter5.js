//chapter 5 High-order functions
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

let labels = [];
repeat(
    5, i => {
    labels.push(`Unit ${i+1}`);
})
console.log(labels);

function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3,2,1);

function unless(test, then) {
    if (!test) then();
}
repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});

["A", "B"].forEach(l => console.log(l));

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
  console.log(power(2,4));
  console.log(power());