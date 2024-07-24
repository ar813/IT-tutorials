/* ********** Advanced Promises ********** */

// 1. Promise resolve
let promise = new Promise((resolve, reject) => {
    resolve("Succsess!!!")
})
promise.then((value) => {
    console.log(value);
}) // Succsess!!!

// 2. Promise reject
let promise2 = new Promise((resolve, reject) => {
    reject("Error!!!")
})
promise2.catch((error) => {
    console.log(error);
}) // Error!!!

// 3. Method Chaining
let returnMoney = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hameed have returned the money on Monday")
    }, 3000)
})
returnMoney.then((value) => {
    console.log(value);
    console.log("Thank you for returning money");
}).catch((error) => {
    console.log(error);
    console.log("Sorry, I need more days. I have no money write now");
}).finally(() => {
    console.log("Thanks for giving me money");
})