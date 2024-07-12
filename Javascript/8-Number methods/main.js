"use strict";
// Number methods
// 1. Number()
// It convert string to number
let num = "57";
let number = Number(num);
console.log(number); // Output: 57 (as a number)
let num2 = "Arsalan";
let number1 = Number(num2);
console.log(number1); // Output: NaN (Not a Number)
let num3 = true;
let number2 = Number(num3);
console.log(number2); // Output: 1 (as a number)
// 2. paresInt()
// It converts decimal to integers
let num4 = "1.5";
let paresInt = parseInt(num4);
console.log(paresInt); // Output: 1 (as a number)
// It give us first integer
let num5 = "23 45 78";
let paresInt2 = parseInt(num5);
console.log(paresInt2); // Output: 23 (as a number)
// number with words
let num6 = "18 years";
let paresInt3 = parseInt(num6);
console.log(paresInt3); // Output: 18 (as a number)
// number with words again
let num7 = "just 18 years";
let paresInt4 = parseInt(num7);
console.log(paresInt4); // Output: NaN (Not a Number)
// 3. parseFloat()
// paresInt() = parseFloat()
// lekin ye decimal ko bhi print krta hai
let num8 = "1.5";
let parsefloat = parseFloat(num8);
console.log(parsefloat); // Output: 1.5 (as a number)
// 4. Number.isFinite()
let num9 = 100;
let isfinite = Number.isFinite(num9);
console.log(isfinite); // Output: true
// Example 2
let num10 = "100";
let isfinite1 = Number.isFinite(num10);
console.log(isfinite1); // Output: false
// 5. Number.isInteger()
let num11 = 100;
let isInteger = Number.isInteger(num11);
console.log(isInteger); // Output: true
// Example 2
let num12 = "100";
let isInteger1 = Number.isInteger(num12);
console.log(isInteger1); // Output: false
// Example 3
let num13 = 1.5;
let isInteger2 = Number.isInteger(num13);
console.log(isInteger2); // Output: false
// 6. toFixed()
let num14 = 123.456;
let toFixed = num14.toFixed(2);
console.log(toFixed); // Output: "123.46"
console.clear();
// 7. toPrecision()
// jitnay number parameter may pass karogay utnayhi ye decimal k baad decimal se phle wala ko mila k dedega
let num15 = 1.23456;
let toPrecision = num15.toPrecision(4);
console.log(toPrecision); // Output: "1.235"
let toPrecision1 = num15.toPrecision(6);
console.log(toPrecision1); // Output: "1.23456"
let toPrecision2 = num15.toPrecision(2);
console.log(toPrecision2); // Output: 1.2
