/* ********** Example of Callback ********** */
// CallBack have 3 atributes 
// 1. When we call any function with a perameter of type function called callback.
// 2. We can only write function name in an argument of any function not call it by round brekets.
// 3. Callbacks have no asyncronous behavior but there are some built-in functions of typescript which take function as parameter. like setTimeOut(()=>{},1000)
function washing(Callback) {
    console.log("Washing strated ...");
    setTimeout(() => {
        console.log("Washing Done!");
        Callback();
    }, 5000);
}
function soaking(Callback) {
    console.log("Soaking strated ...");
    setTimeout(() => {
        console.log("Soaking Done!");
        Callback();
    }, 3000);
}
function drying() {
    console.log("Drying strated ...");
    setTimeout(() => {
        console.log("Drying Done!");
    }, 2000);
}
washing(() => {
    soaking(() => {
        drying();
    });
});
export {};
