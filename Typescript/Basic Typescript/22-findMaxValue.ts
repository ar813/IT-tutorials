/* ************** findMaxValue ************** */

// Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.

let findMaxValue = (array: number[]) => {
    let a = array.reduce((a, b) => a > b ? a : b)
    return a
}
console.log(findMaxValue([1, 2, 3]))