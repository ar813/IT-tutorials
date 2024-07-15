/* ********** Object in Array ********** */

let family = [
    { name: "Arsalan", age: 18 },
    { name: "Rafay", age: 19 },
    { name: "Ayan", age: 14 },
    { name: "Naeem", age: 51 },
    { name: "Farzana", age: 45 }
]
family.forEach((value) => {
    console.log(`Name: ${value.name}, Age: ${value.age}`);
});