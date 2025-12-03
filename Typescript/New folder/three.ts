function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Data is fetching...");

        // setTimeout(() => {
        //     resolve("Data fetched successfully")
        // }, 1000)

        setTimeout(() => {
            reject("Data fetched failed")
        },2000)
    })
}

fetchData()
    .then((val) => {
        console.log(val + "no error");
    })
    .catch((err) => {
        console.log(err + " " + "error");
    })