function reduntant(str) {
  return function () {
    return str;
  };
}

const f1 = reduntant("apple");
console.log(f1());
