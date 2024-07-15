/* ********** map() ********** */

// map() method of array (It do not change original array but create a new array)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let map = arr.map((value) => {
    return value * 10
})
console.log(map); // Output: [ 10, 20, 30, 40,  50, 60, 70, 80, 90, 100 ]

// Example No 02.
let arr2 = [
    { name: "Arsalan", age: 18 },
    { name: "Rafay", age: 19 },
    { name: "Ayan", age: 14 },
    { name: "Naeem", age: 51 },
    { name: "Farzana", age: 45 }
]

let map2 = arr2.map((value) => {
    return `${value.age}`
})
console.log(map2); // Output: [ '18', '19', '14', '51', '45' ]