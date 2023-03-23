// In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function. For example,

import js from js;
function greet(name, cb) {
  console.log('Hi ' + name);
  cb();
}

function callme() {
  console.log('callback');
}

greet('Ruhul Amin', callme);
greet('Ruhul', callme);

