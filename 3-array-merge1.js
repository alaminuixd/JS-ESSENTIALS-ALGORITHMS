// Merge two Arrays of Objects and sort according to the "id"
const array1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 4, name: "Daniel" },
  { id: 6, name: "Shiffman" },
];
const array2 = [
  { id: 2, age: 30 },
  { id: 6, name: "Bob" },
  { id: 5, name: "Pikaso" },
  { id: 3, name: "Julian" },
];

function mergArrObj(arObj1, arObj2) {
  const merged = [...arObj1]; // copy
  for (let i = 0; i < arObj2.length; i++) {
    let matched = false;
    for (let j = 0; j < merged.length; j++) {
      if (merged[j].id === arObj2[i]) {
        matched = true;
        break;
      }
    }
    if (!matched) {
      merged.push(arObj2[i]);
    }
  }
  return merged.sort((a, b) => a.id - b.id);
}

console.log(mergArrObj(array1, array2));
