/* ********** CallBack ********** */
// Basic Example
function one(param) {
    console.log("Hello World");
    param();
}
one(function () {
    console.log("Inside callBack function");
});
// OR
function two(param) {
    console.log("Hello World");
    param();
}
function another() {
    console.log("Inside callBack function");
}
two(another); // Never write (round brakets) when you call callback functoin
// Advanced Example
function parentFunction(func) {
    console.log("Before calling function");
    let result = func(2, 4);
    console.log(result);
    console.log("After calling function");
}
parentFunction(function callBack(a, b) {
    return a + b;
}); // result: 6
export {};
