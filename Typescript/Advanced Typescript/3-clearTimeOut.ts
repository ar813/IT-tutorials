/* ************ ClearTimeOut ************ */

// For setTimeout
console.log("before acync");

let setTimeoutID = setTimeout(() => {
    console.log("Hello");
})

if (true) {
    clearTimeout(setTimeoutID)
}
console.log(setTimeoutID);

console.log("After acync");

// For setInterval
console.log("before acync");

let setintervelID = setInterval(() => {
    console.log("Hello");
})

if (true) {
    clearTimeout(setintervelID)
}
console.log(setintervelID);

console.log("After acync");