/* ********** Async Await ********** */
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
            reject("Soaking not Done!");
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
async function washingMashine() {
    await washing().then((value) => {
        console.log(value);
    });
    await soaking().then((value) => {
        console.log(value);
    });
    await drying().then((value) => {
        console.log(value);
    });
}
washingMashine().catch((err) => {
    console.log(err);
});
export {};
// ******* OR *******
// async function washingMashine2 () {
//     try{
//         let result1 = await washing() // Here variables have the value of resolve and reject
//         console.log(result1);
//         let result2 = await soaking()
//         console.log(result2);
//         let result3 = await drying()
//         console.log(result3);
//     }
//     catch(err){
//         console.log(err);
//     }
//     finally{
//         console.log("All Done!");
//     }
// }
// washingMashine2()
