/* ********** Comparison Operators ********** */
let d = 3
let e = "3"
//@ts-ignore
console.log(d == e); //true in JS (value checking)
//@ts-ignore
console.log(d === e); //false in JS (value checking with type)

console.log(null == undefined); //true in JS (value checking)
console.log(null === undefined); //false in JS (value checking with type)