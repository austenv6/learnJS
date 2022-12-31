//const SCRIPTS = require("../scripts");

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

function filter(array, test) {
  let passed = [];
  for (let element of array) {
      if (test(element)) {
          passed.push(element);
      }
  }
  return passed;
}
//console.log(filter(SCRIPTS, script => script.living));
//console.log(SCRIPTS.filter(s => s.direction == "ttb"));

//transforming with MAP
function map(array, transform) {
  let mapped= [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1,2,3,4], (a,b) => a + b, 0));
console.log([1,2,3,4].reduce((a,b) => a + b));

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a,b) => {
  // if a char ct is less than b, return b else return a.
  return characterCount(a) < characterCount(b) ? b : a;
}));

function average(array) {
  return array.reduce((a,b) => a + b) / array.length;
}
console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(121));
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
console.log(roseDragon.codePointAt(0));
console.log(roseDragon.codePointAt(1));
console.log(roseDragon.codePointAt(2));

//exercises
//flattening

let arrays = [[1,2,3], [4,5], [6]];

console.log(arrays.reduce((result, array) => result.concat(array),[]));

function loop(value, testF, updateF, consoleLog) {
  for (let i = value; testF(i); i = updateF(i)) {
    consoleLog(i);
  }

}

loop(3, n => n > 0, n => n - 1, console.log);

function every(array, test) {
  for (let val of array) {
    if (!test(val)) {
      return false;
    }
  }
  return true;
}
function every2(array,test) {
  return !array.some(element => !test(element));
  
}
console.log(every2([1,3,5], n => n < 10));
console.log(every2([2,4,16], n => n < 10));
console.log(every2([], n => n < 10));

function dominantDirection2(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (scripts.length == 0) return "ltr";
}

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");
}
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

//high order function takes function as param or returns function.
