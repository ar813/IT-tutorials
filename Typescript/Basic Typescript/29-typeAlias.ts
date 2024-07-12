/* ************** Type Alias (Do not repeat yourself) ************** */

// In TypeScript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readability, organization, and abstraction of complex types
// To define a type alias, you use the type keyword followed by the alias name and the type definition:

// When you declare a type write names of it but first letter will be capital.

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
