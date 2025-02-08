// logic 1
[-10, -4, -5, -30].reduce(
  (accu, curr) => (curr > accu ? curr : accu),
  -Infinity
);
// logic 2
Math.max(...[-10, -4, -5, -30]);
// logic 3
[-1, -10, -4, -5, -30].reduce((accu, curr) => (curr > accu ? curr : accu));
// logic 4
const maxNum = Number(
  [9, 3, 2, 8, 5, 7, 6, 1, 4]
    .sort((a, b) => a - b)
    .slice(-1)
    .join()
);
