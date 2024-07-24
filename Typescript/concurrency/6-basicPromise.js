/* ********** Basic Promises ********** */
let promise1 = new Promise(() => { });
console.log(promise1); // Promise { <pending> }
let promise2 = new Promise((resolve, reject) => {
    resolve("Success");
}); // fulfilled
let promise3 = new Promise((a, b) => {
    b("Something went wrong");
}); // reject (Error)
export {};
