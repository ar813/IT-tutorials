function fetchData() {
    return new Promise(function (resolve, reject) {
        console.log("Data is fetching...");
        // setTimeout(() => {
        //     resolve("Data fetched successfully")
        // }, 1000)
        setTimeout(function () {
            reject("Data fetched failed");
        }, 2000);
    });
}
fetchData()
    .then(function (val) {
    console.log(val + "no error");
})
    .catch(function (err) {
    console.log(err + " " + "error");
});
