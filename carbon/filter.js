const concat = (array1, array2) => array1.concat(array2);
const length = (array) => array.length;
const head = (array) => array[0];
const tail = (array) => array.slice(1);

function filter(predicateFn, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(predicateFn, tail(array)));
}

const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
wholes; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (n) => n % 2 === 0;
const evens = filter(isEven, wholes);
evens; // [0, 2, 4, 6, 8, 10]

const odds = filter((n) => !isEven(n), wholes);
odds; // [1, 3, 5, 7, 9]

const greaterThanFour = filter((n) => n > 4, wholes);
greaterThanFour; // [5, 6, 7, 8, 9, 10]

function isPrime(n) {
  if (n <= 1) return false;
  const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const possibleFactors = filter((m) => m > 1 && m < n, wholes);
  const factors = filter((m) => n % m === 0, possibleFactors);
  return factors.length === 0 ? true : false;
}
const primes = filter(isPrime, wholes);
primes; // [2, 3, 5, 7]
