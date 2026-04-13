Array.prototype.myFilter = function (callback) {
  var output = [];

  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

Array.prototype.myMap = function (callback) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      output.push(result);
    }
  }
  return output;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const profiles = [
  { name: "Dang", active: true },
  { name: "Binh", active: true },
  { name: "Khang", active: false },
];

// const evennumbers = numbers.myFilter( n => n % 2 === 0);
// console.log(evennumbers);

// const doubled = numbers.myMap( n => n*2 );
// console.log(doubled);

// const activeUsers = profiles.myFilter(u => u.active);
// console.log(activeUsers);

// const names = profiles.myMap(u => u.name);
// console.log(names);

// xay dung myReduce;
Array.prototype.myReduce = function (callback, initialValue) {
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// const test = profiles.myReduce((totalname, name) => totalname + name, 0);
// console.log(totalname);
