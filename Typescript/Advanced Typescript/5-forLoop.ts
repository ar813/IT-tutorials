/* ************ for loop ************ */

for (let i = 1; i <= 10; i++) {
    console.log("Hello For Loop");
}

// The above loop in function
function tables(value: number) {
    for (let i = 1; i <= 10; i++) {
        let tableOfTwo = `${i} X ${value} = ${i * value}`
        console.log(tableOfTwo);
    }
}
tables(1)
console.log("");
tables(2)
console.log("");
tables(3)
console.log("");
tables(4)
console.log("");
tables(5)
console.log("");
tables(6)
console.log("")
tables(7)
console.log("");
tables(8)
console.log("");
tables(9)
console.log("");
tables(10)