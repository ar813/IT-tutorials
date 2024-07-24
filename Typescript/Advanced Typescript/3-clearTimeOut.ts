/* ************ ClearTimeOut ************ */

// For setTimeout
console.log("before acync");

let a = setTimeout(() => {
    console.log("Hello");
}, 1000)

clearTimeout(a)

console.log("After acync");


// For setInterval
console.log("before acync");

let b = setInterval(() => {
    console.log("Hello");
}, 1000)

clearTimeout(b)


console.log("After acync");