const { filter, map, reduce } = require("./utils/helper");

const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log({ wholes });

console.log("\n👇 Filter 👇\n");

const isEven = (n) => n % 2 === 0;
const evens = filter(isEven, wholes);
console.log({ evens });

const odds = filter((n) => !isEven(n), wholes);
console.log({ odds });

const greaterThanFour = filter((n) => n > 4, wholes);
console.log({ greaterThanFour });

function isPrime(n) {
  if (n <= 1) return false;
  const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const possibleFactors = filter((m) => m > 1 && m < n, wholes);
  const factors = filter((m) => n % m === 0, possibleFactors);
  return factors.length === 0 ? true : false;
}
const primes = filter(isPrime, wholes);
console.log({ primes });

console.log("\n👇 Map 👇\n");

const doubled = map((n) => n * 2, wholes);
console.log({ doubled });

const halved = map((n) => n / 2, wholes);
console.log({ halved });

function fizzBuzzFn(n) {
  const fizzed = n % 3 === 0 ? "fizz" : "";
  const buzzed = n % 5 === 0 ? "buzz" : "";
  return fizzed || buzzed ? fizzed + buzzed : n;
}
const fizzBuzz = map(fizzBuzzFn, wholes);
console.log({ fizzBuzz });

console.log("\n👇 Reduce 👇\n");

const sum = reduce((acc, val) => acc + val, 0, wholes);
console.log({ sum });

const arr = [7, 1, 3, 5, 6, 2, 8, 10, 0, 4, 9];
const max = reduce((acc, val) => (val > acc ? val : acc), 0, arr);
console.log({ max });
