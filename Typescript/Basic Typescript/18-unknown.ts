/* ************** Unknown ************** */

// Unknown: The "unknown" type is a safer alternative to "any" type because it still enforces type checking and type safety. Variables of type unknown can hold values of any type. Unknown type is used when you have no idea about that type. But in future, you will get some knowlege about that type
// unknown has a keyword called typoeOf. you can use it to check your variable or other type.

let num3:unknown;
num3 = 5;
num3 = "Arsalan"
num3 = true
num3 = 7

if(typeof num3 === "number"){
    console.log(num3 + 5);
}

// Explaination

// What it means: "I don’t know the type right now, but let’s be cautious."
// Behavior: You can’t do anything with a value of type unknown without first checking its type.
// Safety: Safer than any, because TypeScript forces you to ensure the type is correct before using the value.

let value: unknown = "Hello";

// value(); // Error: You can't call a value of type 'unknown'.
// console.log(value.toUpperCase()); // Error: You can't use this directly.

if (typeof value === "string") {
  console.log(value.toUpperCase()); // Works, because we checked the type first.
}

value = 123; // You can change the type, but you still need to check it later.


