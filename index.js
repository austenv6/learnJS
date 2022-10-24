console.log("hello world");
//alert("Hello World?");
let x = 30;
console.log("the value of x is ", x);
console.log(Math.max(2,8));
// let theNumber = Number(prompt("pick a number"));
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//     console.log("That wasn't a number");
// }
// let num = Number(prompt("pick another number"));
// if (num < 10) {
//     console.log("Small");
// } else if ( num < 100) {
//     console.log("Medium");
// } else {
//     console.log("Large");
// }

let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

let yourName;
do {
    yourName = prompt("who are you?");
} while (!yourName);
console.log(yourName);

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

console.log("more stuff");
let result2 = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result2 = result2 * 2;
}
console.log(result2);
let pyr = "";
for (let n = 0; n < 7; n += 1) {
    pyr = pyr + "#";
    console.log(pyr);
}