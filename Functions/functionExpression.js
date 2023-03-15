

const addition = (a,b) => {
  let sum = 0;
  sum = a + b;
  return sum;
}




setTimeout(()=>{
  console.log("execute after 5 sec")
}, 5000)

const result = addition(5, 10);
console.log("🚀 ~ file: functionExpression.js:10 ~ result:", result);