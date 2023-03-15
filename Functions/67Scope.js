var num = 20;

// if (num === 20) {
//   if (num => 15) {
//     console.log(num, "is greater then 15");
//   }
// }

function main(num) {
  
  function a() {
    if (num == 20) {
      return num;
    }
  }

  function b() {
    if (num == a())
      return num;
  }

  if (a() / b() === 1) {
    console.log("Modilar 0")
  }
  else
    console.log("Modular not 0")

}

main(20);
