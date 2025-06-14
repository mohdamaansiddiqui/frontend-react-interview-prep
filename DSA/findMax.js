function findMax(arr) {
  return arr.reduce((max, curr) => curr > max ? curr : max, -Infinity);
}