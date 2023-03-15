function addNum() {
  
  let sum = 0;

  for (var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

const result = addNum(20, 30, 50);

console.log(result);
