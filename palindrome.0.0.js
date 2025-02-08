/* 
"palindrome" is a tring that will be in the same form even after reversing it.
Example: before reversed "reviver" after reversed "reviver".
*/

function palindrome1(str) {
  const reved = str.split("").reverse().join("");
  return reved === str ? true : false; // ternary operator
  // Even simpler ternary: return reved === str;
}
console.log(palindrome1("house")); // return false
console.log(palindrome1("reviver")); // return true
