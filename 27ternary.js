const a = 10;
const b = 10;

const result = (a === b) ? `a is equal to b` : `a is not equal to b`;
// console.log(result);

const ternary = (one ,two) => {
  const result = one < two ? `a is small than b` : `b is small than a`
  return result;
}
const value = ternary(a, b);
console.log("🚀 ~ file: 37ternary.js ~ line 12 ~ value", value)

const ternary1 = (one, two) => one > two
  ?`a is big `
  : one < two ? `a is small`
  : `a equal to b`

  console.log(ternary1(a, b));
