/* ************** Map and Filter Method (Arrays' method) ************** */

const numbers: number[] = [1, 2, 3, 4, 5];

/* ************** Map Method ************** */

// The map method creates a new array by applying a provided function to each element of the original array. It transforms each element and returns a new array with the transformed values.
// The .map() method in TypeScript (and JavaScript) is used to create a new array by applying a function to each element of an existing array. It doesn't change the original array but instead returns a new array with the transformed elements.

// 1: Doubling each number
const doubleData: number[] = numbers.map((currentValue: number) => {
    return currentValue * 2
})
console.log(doubleData);

// 2: Converting numbers to string
let numbersToString: string[] = numbers.map((curEle: number) => {
    return curEle.toString()
})
console.log(numbersToString);

// 3: Formatting Dates
let dates = [new Date(2024, 5, 15), new Date(2024, 5, 15)];
let formattedDates = dates.map(date => date.toDateString());
console.log(formattedDates); // ["Sat Jun 01 2024", "Sat Jun 15 2024"]

// Explaination of the above means "new Date(2024, 5, 15) && .toDateString()"
// new Date(2024, 5, 1) creates a date object representing June 1, 2024. Note that the month is 0-indexed in JavaScript/TypeScript, so 5 represents June (the sixth month)
let date = new Date(2024, 5, 19)
console.log(date.toDateString()); // "Sat Jun 19 2024"

/* ************** Filter Method ************** */

// No2. Filter Method

// If you want some specific data or you want to filter your data , you can use filter method

// 1: Filtering even numbers
let evenNumber = numbers.filter((currentValue) => {
    return currentValue % 2 === 0
})
console.log(evenNumber);

// 2: Filtering numbers greater than 3
let numberGreaterThan3 = numbers.filter((currentValue) => {
    return currentValue > 3
})
console.log(numberGreaterThan3);

/* ************** Practice questions for map ************** */

// 1: Given an array of strings representing names, create a new array that contains the uppercase version of each name.
const names: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"]
let uppercaseVersion = names.map((value) => {
    return value.toUpperCase()
})
console.log(uppercaseVersion);

// 2: Given an array of numbers, create a new array that contains the square of each number.
let number = [1, 2, 3, 4, 5]
let squareOfEachNumber = number.map((value) => {
    return value * value
})
console.log(squareOfEachNumber);

/* ************** Practice questions for filter ************** */

// 1: Given an array of strings, create a new array that contains only the strings with a length greater than 4.
let namesWithLengthGreaterThan4 = names.filter((value) => {
    return value.length > 4
})
console.log(namesWithLengthGreaterThan4);

// 2: Given an array of strings, filter out the names that start with the letter "A".
let namesStartingWithA = names.filter((value) => {
    return value.startsWith("A")
})
console.log(namesStartingWithA);
