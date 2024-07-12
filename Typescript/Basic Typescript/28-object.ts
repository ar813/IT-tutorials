/* ************** Object ************** */

// In TypeScript, objects are used to represent data with key-value pairs.

// Let's consider a real-life example of representing a person's information using TypeScript objects
// name, age, isStudent, address{ city, country}

let person: {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        city: string;
        country: string
    } // If you define values of an object use comma "," but in types of object use semi-colon ";"
} = {
    name: "Arsalan",
    age: 10,
    isStudent: true,
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
}

// Accessing the object data
console.log(person.address.country);

// Updating object properties
person.address.country = "USA"
console.log(person.address.country);

// It can replace our original object too means
console.log(person);
// OutPut: {
//    name: 'Arsalan',
//     age: 10,
//     isStudent: true,
//     address: { city: 'Karachi', country: 'USA' }
//   }
