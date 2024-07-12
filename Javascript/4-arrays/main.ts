// Arrays
let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(arr )
// console.log(arr[3])

// Example of array
let sum = 0
document.write("<ul>")
for(let i=0; i< arr.length; i++){
    document.write("<li>" + arr[i] + "</li>");
    sum = sum + arr[i]
}
document.write("</ul>")
document.write(`Total Sum: ${sum}`)

// new Array
let array = new Array()

// Example of new array

for(let j=0; j<3; j++){
    // array[j] = prompt("Enter the value")
}
document.write("<ul>")
for(let a=0; a< array.length; a++){
    document.write("<li>" + array[a] + "</li>");
}
document.write("</ul>")

// Nested array
let arr2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// console.log(arr2)

// Modify & Delete Array Elements
let arr3 = [10,20,30,40,50,60,70,80,90,100]

// Modify
arr3[3] = 1000
console.log(arr3)

// Delete
delete arr3[2]
console.log(arr3);

