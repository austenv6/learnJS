let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

console.log(Object.keys({x: 0, y: 0, z: 2}));

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b:3, c:4});
console.log(objectA);

// let journal = [
//     {events:["work", "touched tree", "pizza", "running", "television"],
//      squirrel: false},
//     {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
//      squirrel: false},
// ];
// console.log(journal);

let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

