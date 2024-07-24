/* ************** calculateAverage ************** */

// Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.

let calculateAverage = (array: number[]): number => {
    let a = array.reduce((a, b) => a + b) / array.length
    return a
}
console.log(calculateAverage([1, 2, 3]))

/* ************** Explaination ************** */

// array.reduce((a, b) => a + b): This part uses the reduce method to sum up all the numbers in the array.
// The reduce method taking a calback function (a, b) => a + b that adding two numbers together.
// It starts with the first two numbers in the array, adds them together, then adds the result to the next number, and so on, until all numbers are added up.
// /array.length: This divides the sum of the numbers by the number of elements in the array (array.length). This calculates the average of the numbers.
