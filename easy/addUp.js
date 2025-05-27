// Add up the Numbers from a Single Number
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUp(4)); //10
console.log(addUp(13));
