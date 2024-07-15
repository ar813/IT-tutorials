/* ********** for in loop ********** */

let forLoop: any = {
    name: "Arsalan",
    age: 18,
    city: "Karachi",
    country: "Pakistan",
    email: "abs@gmail.com"
}

for (let value in forLoop) {
    console.log(`${value}: ${forLoop[value]}`);
}
