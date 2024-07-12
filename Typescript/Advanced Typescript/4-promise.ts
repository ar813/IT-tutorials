/* ************ Promise ************ */

function promiseFunction(resolve: any, reject: any) {
    if (true) {
        resolve("Success")
    } else {
        reject("Error")
    }
}

let result = new Promise(promiseFunction)
    .then((data) => { console.log(data); })
    .catch((error) => { console.log(error); })


// Example no 2
const myPromise: Promise<number> = new Promise((resolve, reject) => {
    const success = true; // Simulate condition

    if (success) {
        resolve(42); // Resolve with a value
    } else {
        reject(new Error("Something went wrong"));
    }
});

myPromise.then((value: number) => {
    console.log(value); // Output: 42
}).catch((error: Error) => {
    console.error(error.message);
});
