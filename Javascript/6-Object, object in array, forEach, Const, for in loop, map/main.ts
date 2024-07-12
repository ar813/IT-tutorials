// Object

let brothersArray = ["Rafay", "Ayan"]
let object = {
    firstName: "Arsalan",
    lastName: "Khan",
    brothersName: brothersArray,
    address: {
        street: "123 Main St",
        city: "Karachi",
        country: "Pakistan"
    },
    greeting: () => {
        let greet = `Hello! My name is ${object.firstName + " " + object.lastName}. I have two brothers name ${object.brothersName[0]} and ${object.brothersName[1]}`
        return greet;
    }
}

console.log(object); // Output: Whole Object
console.log(object.greeting()); // Output: Hello! My name is Arsalan Khan. I have two brothers name Rafay and Ayan
console.log(object.address.street); // Output: 123 Main St

/// object in array
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

// // Another method to create an object: (It will work in javascript)
// let person = new Object()
// person.firstName = "Rafay"
// person.lastName = "Khan"
// console.log(person.firstName); // Output: Rafay
// console.log(person["lastName"]); // Output: Khan

// Const Variable
// We know that we cannot assingn value again to const variable.
// But we can change the value inside the array and Object, but we cannot assingn whole array or object but we can do it one-by-one

// Let's try to change the value inside const array and object

// For Array
const a = ["Flower", "Laptop", "Mobile"]
// a = ["Book"] // error but see blow
a[0] = "Book"
console.log(a); // Output: ["book", "Laptop", "Mobile"]

// For Object
const b = {
    name: "Arsalan",
    age: 18
}
b.name = "Rafay"
console.log(b); //Output: { name: 'Rafay', age: 18 }

// for in loop
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
console.clear()

// map() method of array (It do not change original array but create a new array)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let map = arr.map((value) => {
    return value * 10
})
console.log(map); // Output: [ 10, 20, 30, 40,  50, 60, 70, 80, 90, 100 ]

// Example No 02.
let arr2 = [
    { name: "Arsalan", age: 18 },
    { name: "Rafay", age: 19 },
    { name: "Ayan", age: 14 },
    { name: "Naeem", age: 51 },
    { name: "Farzana", age: 45 }
]

let map2 = arr2.map((value) => {
    return `${value.age}`
})
console.log(map2); // Output: [ '18', '19', '14', '51', '45' ]
