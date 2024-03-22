/* 
--Return an integer reversing it from its original form.
    1) 12345
*/
// a) using for loop:
//* to know how the loop is working please see the "1-reverse-string.js"
function revInt1(n) {
  let reved = "";
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    //* Note: "for of" Array loop is a better & cleaner solution for this.
    reved = n[i] + reved;
  }
  return parseInt(reved);
}
// with positive numbers
let revedNumberPos = revInt1(12345);
console.log(revedNumberPos);
// with negative numbers
let revedNumberNeg = revInt1(-12345);
console.log(revedNumberNeg * -1); //* multiplying with "-1" will make the number negative.

// b) using while loop, modular and Math.trunc:
function revInt1(n) {
  let reversed = 0;
  while (n !== 0) {
    let digit = n % 10; // Get the last digit of n
    reversed = reversed * 10 + digit; // Append the digit to the end of reversed
    n = Math.trunc(n / 10); // Remove the last digit from n
  }
  return reversed;
}

// c) using string methods string.reverse();
function revInt2(n) {
  //* to know how the chaining work, please see the "1-reverse-string.js"
  let reved = n.toString().split("").reverse().join("");
  return parseInt(reved) * Math.sign(n); // Math.sign(n) assigns the operator associated to the num
}
// with positive number
console.log(revInt2(12345));
// with negative number
console.log(revInt2(-12345));
