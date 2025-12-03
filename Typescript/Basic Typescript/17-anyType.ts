/* ************** Any ************** */
// any: The any type is most flexible type in typescript. It essentially turns off all type checking for the variable and expressions it is applied to. We use it When dealing with data from dynamic sources Like userinputs or json objects, the any type can be usefull.

let myFavNum2:any = 54;
myFavNum2 = "Arsalan";
myFavNum2 = true;

// Explaination

// What it means: "I don't care about the type. Do whatever you want!"
// Behavior: You can do anything with a value of type any without TypeScript checking if it’s valid.
// Safety: Unsafe, because TypeScript won’t stop you from making mistakes.

let value: any = "Hello";

value(); // No error, even though calling a string as a function is wrong.
console.log(value.toUpperCase()); // Works, but TypeScript doesn't check.

value = 123; // You can change the type freely.