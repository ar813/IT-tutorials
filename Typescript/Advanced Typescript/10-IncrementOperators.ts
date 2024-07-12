/* ************ postfix Increment operator ************ */

let index = 10
index++ // index = index + 1
console.log(index); // 11
index-- // index = index - 1
console.log(index); //10

/* ************ prefix Increment operator ************ */
let index1= 10
++index1 // index = index + 1
console.log(index1); // 11
--index1 // index = index - 1
console.log(index1); //10

/* ************ Difference between postfix Increment and prefix Increment operators ************ */
let num = 5
let result = num++
console.log(result); // 5
console.log(num); // 6

let num1 = 5
let result1 = ++num1
console.log(result1); // 6
console.log(num1); // 6