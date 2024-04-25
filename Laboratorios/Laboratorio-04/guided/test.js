/* 
Use this file or create other  ones so you can:
1. Try using variables and console.log()
2. Creating and calling a function
3. Hoisting
4. Creating and calling an arrow function
*/

// code here...

const isEven = (n) => n % 2 == 0;

let printMessage = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}.`)
}

// Pass in isEven as the callback function
printMessage(isEven, 4); 
// Output: The number 4 is an even number: True.