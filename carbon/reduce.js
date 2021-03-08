const concat = (array1, array2) => array1.concat(array2);
const length = (array) => array.length;
const head = (array) => array[0];
const tail = (array) => array.slice(1);

function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) return initialValue;
  const newInitialValue = reducerFn(initialValue, head(array));
  return reduce(reducerFn, newInitialValue, tail(array));
}

const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
wholes; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = reduce((acc, val) => acc + val, 0, wholes);
sum; // 55

const arr = [7, 1, 3, 5, 6, 2, 8, 10, 0, 4, 9];
const max = reduce((acc, val) => (val > acc ? val : acc), 0, arr);
max; // 10
