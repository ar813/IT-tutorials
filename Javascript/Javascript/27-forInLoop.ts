/* ********** for in loop ********** */

let forInLoop: any = {
    name: "Arsalan",
    age: 18,
    city: "Karachi",
    country: "Pakistan",
    email: "abs@gmail.com"
}

for (let value in forInLoop) {
    console.log(`${value}: ${forInLoop[value]}`);
}