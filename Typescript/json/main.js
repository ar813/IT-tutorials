// import chalk from "chalk"
// import countries from "./countries.json" assert {type: "json"}
// for (let i = 0; i < countries.length; i++) {
//     const element = countries[i]
//     if(element.name.slice(0,1) == "P"){
//     console.log(`Country Name is ${chalk.white.bgRed.bold(element.name)} and Country code is ${chalk.white.bgGreen.bold(element.code)}`);
//     }
// }
// // 1. Slice Method 
// // The slice method in TypeScript (and JavaScript) is used to create a new array by copying a part of an existing array. This method does not change the original array; instead, it returns a new array containing the selected elements.
// // array.slice(start, end);
// // Copying the Whole Array:
// let numbers = [1, 2, 3, 4, 5];
// let allNumbers = numbers.slice();
// console.log(allNumbers); // Output: [1, 2, 3, 4, 5]
// // Copying Part of an Array:
// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// let someFruits = fruits.slice(0, 3);
// console.log(someFruits); // Output: ["banana", "cherry", "date"]
// // Using Negative Indices: Negative indices count back from the end of the array.
// let colors = ["red", "green", "blue", "yellow", "purple"];
// let lastTwoColors = colors.slice(-2);
// console.log(lastTwoColors); // Output: ["yellow", "purple"]
// // Omitting the End Parameter: If the end parameter is omitted, the slice method extracts through the end of the array.
// let animals = ["cat", "dog", "elephant", "fox", "giraffe"];
// let fromSecondAnimal = animals.slice(1);
// console.log(fromSecondAnimal); // Output: ["dog", "elephant", "fox", "giraffe"]
// // 2. TypeScript Types
// let a: string = "Arsalan"
// let b: number = 3
// let c: boolean = true
// let d: null = null // Empty variable (Means this variable have no value)
// let e: undefined =  undefined // variable ko define nhi kya gya hai
// let f: void = undefined // When we do not "return" any thing specially in funtions
// function exampleOfVoid():void{
//     console.log("Hello");
// }
let g = 98; // Anything (Don't cheak type)
g = true;
if (typeof g == "boolean") {
    g = "I am arsalan";
}
console.log(g);
let h = "string"; // I dont know (Baad may hamay type maloom hojaigi)
h = true;
if (typeof h == "boolean") {
    g = 45;
}
console.log(h);
export {};
