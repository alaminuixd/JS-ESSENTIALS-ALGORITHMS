function findRepeatedCharacters(str) {
  let frequency = {};
  let repeatedCharacters = [];

  // Count the frequency of each character
  for (let char of str) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  // Find characters used more than once
  for (let char in frequency) {
    if (frequency[char] > 1) {
      repeatedCharacters.push(char);
    }
  }

  return repeatedCharacters;
}

// Example usage:
let str = "accelaaaters";
let repeatedChars = findRepeatedCharacters(str);
console.log("Characters used more than once:", repeatedChars);
