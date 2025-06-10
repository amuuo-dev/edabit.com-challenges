function hasDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasDuplicates([1, 2, 3, 3])); //true
console.log(hasDuplicates([1, 2, 3, 4])); //false
