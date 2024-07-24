/* ************** Arrays ************** */

// i. We can define arrays by three different ways: 

//  a. Using square brakets: 
let arr1: number[] = [1, 2, 3]
//  b. Using the Array constructor:
let arr2: number[] = new Array(1, 2, 3)
//  c. Using the Array.of method:
let arr3: string[] = Array.of("Arsalan", "Rafay", "Ayan")

// ii. we can also define type of array by;
let arr4: Array<number> = [1, 2, 3]

// iii. Accessing elements using index:
// You can access individual elements of an array using square brackets notation with the index of the element. Remember that array indices start from 0.
let myArray = ["Computer", "Mobile", "Laptop"]
console.log(myArray[1]); // Mobile

console.log(`I love ${myArray[1]}`);

// iv. you can use .length method to knowing the length of array
console.log(myArray.length); // 3

// Note: .length method give only length of array not index of array.