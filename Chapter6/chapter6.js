let rabbit = {};
rabbit.speak = function (line) {
    console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };
whiteRabbit.speak("Oh my ears and whiskers, " + " how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");
speak.call(hungryRabbit, "burps!");


function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });

let cordy = {
    cords: [0, 2, 3],
    length: 5,
    normalize2() {
        console.log(this.cords.map(n => n / this.length))
    }
};
cordy.normalize2();

let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEE!");

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

// function Rabbit(type) {
//     this.type = type;
// }
// Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
// };

// let weirdRabbit = new Rabbit("weird");

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);

killerRabbit.teeth = "long, sharp and bloody";
console.log(killerRabbit.teeth);

console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

console.log(killerRabbit.toString());

// maps (keys)
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);
console.log(`Julia is ${ages["Julia"]}`);
console.log("Is Jack's age known?", "Jack" in ages);
console.log("Is toString's age known?", "toString" in ages);
console.log(ages.toString());

//polymorphism
Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit));

//Symbols
let sym = Symbol("name");
console.log(sym == Symbol("name"));
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};

console.log([1,2].toString());
console.log([1,2][toStringSymbol]());

let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]());

//iterator interface
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

//iterable data structure
class Matrix {
    constructor(width, height, element = (x,y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x,y);
            }
        }
    }

    get(x,y) {
        return this.content[y * this.width + x];
    }
    set(x,y,value) {
        return this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return {done: true};

        let value = {x: this.x,
                     y: this.y,
                     value: this.matrix.get(this.x, this.y)};
        this.x++;
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

let matrix1 = new Matrix(2, 2, (x,y) => `value ${x},${y}`);
for (let {x, y, value} of matrix1) {
    console.log(x, y, value);
}

//getters, setters and statics

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};
console.log(varyingSize.size);

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(35);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);
let tempy = Temperature.fromFahrenheit(100);
console.log(tempy.fahrenheit);

//inheritance
class SymmetricMatrix extends Matrix {
    constructor(size, element = (x,y) => undefined) {
        super(size, element = (x,y) => {
            if (x < y) return element(y, x);
            else return element(x,y);
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}

let matrix = new SymmetricMatrix(5, (x,y) => `${x},${y}`);
console.log(matrix.get(2,3));