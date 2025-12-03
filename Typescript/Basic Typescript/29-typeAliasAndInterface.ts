/* ************** Type Alias (Do not repeat yourself) ************** */

// In TypeScript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readability, organization, and abstraction of complex types
// To define a type alias, you use the type keyword followed by the alias name and the type definition:
// When you declare a type write names of it but first letter will be capital.(Standard)

// 1. What is a Type Alias?
// A type alias is used to give a name to any type. It can represent:
// Objects
// Primitives (e.g., string, number)
// Unions (e.g., string | number)
// Tuples (e.g., [string, number])

type User = {
    name: string;
    age: number;
};

type ID = string | number; // Union type alias


type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    class?: string // optional key-value
    address: {
        city: string;
        country: string
    }
} // use semi-colon

let person2: Person = {
    name: "Arsalan",
    age: 10,
    isStudent: true,
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
}

/* ************** Practice Question Of Type Alias ************** */

// Calculate Total Price:
// Given the product object from the previous question, write a function called
// calculateTotalPrice that calculates and returns the total price (price *
// quantity) of the product.

type Product = {
    name: string;
    price: number;
    quantity: number;
}

let product1: Product = {
    name: "Londhon",
    price: 1800,
    quantity: 5
}

let calculateTotalPrice = (product1: Product) => {
    return product1.price * product1.quantity
}
console.log(calculateTotalPrice(product1));

/* ************** Type Alias (only for objects) ************** */

// An interface is specifically for defining the structure of an object. It describes how an object should look, with its properties and their types.

interface User1 {
    name: string;
    age: number;
}

/* ************** Difference between type alias and interface ************** */

// No # 01:

// Type Alias: You can’t extend a type alias after it’s created.
type User2 = { name: string };
type ExtendedUser = User2 & { age: number }; // Using intersection (&)

//Interface: You can extend an interface directly.
interface User3 { name: string; }
interface ExtendedUser1 extends User3 { age: number; } // Using extends (key word)

// No # 02:

// Type Alias: Cannot be re-declared or merged.
type User4 = { name: string };
// type User = { age: number }; // Error: Duplicate identifier

// Interface: Automatically merges when declared multiple times.
interface User5 { name: string; }
interface User5 { age: number; } // Adds age to User
const user: User5 = { name: "John", age: 30 }; // Works!
