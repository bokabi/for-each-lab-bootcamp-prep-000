function logArrayElement(element, index, array) {
  console.log(`${index}: ${element}`);
}

function iterativeLog(array) {
  array.forEach(logArrayElement);
  }

function square(n) {
  console.log(n * n);
}

function iterate(square) {
  var array = [1, 3, 4, 5, 6];
  array.forEach(square);
  return array;
}

function doToArray(array, square) {
  array.forEach(square);
}