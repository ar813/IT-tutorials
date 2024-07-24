/* ********** Solution of Callback ********** */
function washing() {
    console.log("Washing strated ...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Washing Done!");
        }, 5000);
    });
}
function soaking() {
    console.log("Soaking strated ...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Soaking Failed!");
        }, 3000);
    });
}
function drying() {
    console.log("Drying strated ...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Drying Done!");
        }, 2000);
    });
}
washing().then((wash) => {
    console.log(wash);
    return soaking(); // you must write "return" because return keyword has the ability to return promise in .then
}).then((soak) => {
    console.log(soak);
    return drying();
}).then((dry) => {
    console.log(dry);
}).catch((err) => {
    console.log(err);
});
export {};
