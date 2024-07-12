/* ************** How to ignore errors in typescript ************** */
let num2 = 5;
// @ts-ignore
num1 = "five";
console.log(num2); // the result is "five" because we have written "// @ts-ignore" command in above the line of error. you can ignore errors by using this command in your code.