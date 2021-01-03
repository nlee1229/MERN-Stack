// 1.
// console.log(hello);
// var hello = 'world';

var hello;
console.log(hello);
hello = 'world';
// prediction: undefined, because the 'var' variable is being hoisted

2;
// var needle = 'haystack';
// test();
// function test() {
//   var needle = 'magnet';
//   console.log(needle);
// }
// prediction: magnet, haystack----output: magnet

var needle;
function test() {
  var needle;
  // value declaration
  needle = 'magnet';
  console.log(needle);
}
needle = 'haystack';
test();
// prediction: magnet, haystack ---- output: magnet

// 3.
// var brendan = 'super cool';
// function print() {
//   brendan = 'only okay';
//   console.log(brendan);
// }
// console.log(brendan);

var brendan;
function print() {
  brendan = 'only okay';
  console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
// prediction: only okay, super cool ---- output: super cool

// 4.
// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//   food = 'half-chicken';
//   console.log(food);
//   var food = 'gone';
// }

var food;
function eat() {
  var food;
  food = 'half-chicken';
  console.log(food);
  food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
// prediction: chicken, half-chicken ---- output: chicken, half-chicken

// 5;
// mean();
// console.log(food);
// var mean = function () {
//   food = 'chicken';
//   console.log(food);
//   var food = 'fish';
//   console.log(food);
// };
// console.log(food);

var mean;
mean();
console.log(food);
mean = function () {
  var food;
  food = 'chicken';
  console.log(food);
  food = 'fish';
  console.log(food);
};
console.log(food);
// prediction: chicken, fish ---- output: error, b/c mean is not a function

// 6;
// console.log(genre);
// var genre = 'disco';
// rewind();
// function rewind() {
//   genre = 'rock';
//   console.log(genre);
//   var genre = 'r&b';
//   console.log(genre);
// }
// console.log(genre);

var genre;
function rewind() {
  var genre;
  genre = 'rock';
  console.log(genre);
  genre = 'r&b';
  console.log(genre);
}
console.log(genre);
genre = 'disco';
rewind();
console.log(genre);
// prediction: rock, r&b, disco ---- output: rock, r&b, disco

7;
dojo = 'san jose';
console.log(dojo);
learn();
function learn() {
  dojo = 'seattle';
  console.log(dojo);
  var dojo = 'burbank';
  console.log(dojo);
}
console.log(dojo);

var dojo;
dojo = 'san jose';
console.log(dojo);
function learn() {
  var dojo = 'burbank';
  console.log(dojo);
  dojo = 'seattle';
  console.log(dojo);
}
learn();
console.log(dojo);
// prediction: san jose, brubank, seattle, san jose ---- output: san jose, brubank, seattle, san jose

