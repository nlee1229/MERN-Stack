// 1.
// console.log(hello);
// var hello = 'world';

var hello;
console.log(hello);
hello = 'world';
// prediction: undefined, because the 'var' variable is being hoisted

// 2.
// var needle = 'haystack';
// test();
// function test() {
//   var needle = 'magnet';
//   console.log(needle);
// }
//prediction: magnet, haystack----outcome: magnet

var needle;
function test() {
  var needle;
  needle = 'magnet';
  console.log(needle);
}
needle = 'haystack';
test();
console.log(needle);
// prediction: magnet, haystack ---- outcome: magnet, haystack

// 3.
// var brendan = 'super cool';
// function print() {
//   brendan = 'only okay';
//   console.log(brendan);
// }
// console.log(brendan);

var brendan;
function print() {
  var brendan;
  brendan = 'only okay';
  console.log(brendan);
}
brendan = 'super cool';
print();
console.log(brendan);
// prediction: only okay, super cool ---- outcome: only okay, super cool

// 4. ??????????
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
  food = 'gone';
  console.log(food);
}
food = 'chicken';
eat();
console.log(food);
// prediction: half-chicken, chicken

5;
mean();
console.log(food);
var mean = function () {
  food = 'chicken';
  console.log(food);
  var food = 'fish';
  console.log(food);
};
console.log(food);

var
