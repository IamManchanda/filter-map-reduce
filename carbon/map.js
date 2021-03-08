const concat = (array1, array2) => array1.concat(array2);
const length = (array) => array.length;
const head = (array) => array[0];
const tail = (array) => array.slice(1);

function map(fn, array) {
  if (length(array) === 0) return [];
  return [fn(head(array))].concat(map(fn, tail(array)));
}

const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
wholes; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = map((n) => n * 2, wholes);
doubled; // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const halved = map((n) => n / 2, wholes);
halved; // [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

function fizzBuzzFn(n) {
  const fizzed = n % 3 === 0 ? "fizz" : "";
  const buzzed = n % 5 === 0 ? "buzz" : "";
  return fizzed || buzzed ? fizzed + buzzed : n;
}
const fizzBuzz = map(fizzBuzzFn, wholes);
fizzBuzz; // ["fizzbuzz", 1, 2, "fizz", 4, "buzz",
/* .. */ // "fizz", 7, 8, "fizz", "buzz"]
