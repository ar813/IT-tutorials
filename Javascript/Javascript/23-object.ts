/* ********** Object ********** */

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
console.log(object.brothersName[0]); // Rafay
