/* ********** Array Methods ********** */

// 1. sort() 
let sortArray = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]
sortArray.sort()
console.log(sortArray); // Output: [ 'Arsalan', 'Ayan', 'Farooq', 'Naeem', 'Rafay' ]

// 2. reverse()
let reverseArray = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]
reverseArray.reverse()
console.log(reverseArray); // Output: [ 'Farooq', 'Naeem', 'Ayan', 'Rafay', 'Arsalan' ]

// 3. pop()
let popArray = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]
popArray.pop()
console.log(popArray); // Output: [ 'Arsalan', 'Rafay', 'Ayan', 'Naeem' ]

// 4. push()
let pushArray = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]
pushArray.push("Shahid","Ahmed")
console.log(pushArray); // Output: [ 'Arsalan', 'Rafay', 'Ayan', 'Naeem', 'Farooq', 'Shahid', 'Ahmed' ]

// 5. shift()
let shiftArray = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]
shiftArray.shift()
console.log(shiftArray); // Output: [ 'Rafay', 'Ayan', 'Naeem', 'Farooq' ]

// 6. unshift()
let unshiftArray = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]
unshiftArray.unshift("Shahid","Ahmed")
console.log(unshiftArray); // Output: ['Shahid', 'Ahmed', 'Arsalan', 'Rafay', 'Ayan', 'Naeem', 'Farooq']

// 7. concat()
let array1 = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]
let array2 = ["Shahid","Ahmed"]
let concatArray1 = array1.concat(array2)
console.log(concatArray1); // Output: [ 'Arsalan', 'Rafay', 'Ayan', 'Naeem', 'Farooq', 'Shahid', 'Ahmed' ]
let concatArray2 = array2.concat(array1)
console.log(concatArray2); // Output: ['Shahid', 'Ahmed', 'Arsalan', 'Rafay', 'Ayan', 'Naeem', 'Farooq']

// 8. join()
let array3 = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]
let joinArray = array3.join(" - ")
console.log(joinArray); // Output: Arsalan - Rafay - Ayan - Naeem - Farooq

// 9. slice() : It does not change the original arrray
let array4 = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]
let positiveSliceArray = array4.slice(1,4)
console.log(array4); // Output: [ 'Arsalan', 'Rafay', 'Ayan', 'Naeem', 'Farooq' ]
console.log(positiveSliceArray); // Output: [ 'Rafay', 'Ayan', 'Naeem' ]

let negativeSliceArray = array4.slice(-3, -1)
console.log(negativeSliceArray); // Output: [ 'Ayan', 'Naeem' ]

// 10. splice() : It changes the original array
// It can also work on negative values 
// If you want to delete values only, you can 
// If you want to add values only, you can 

let array5 = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]
let spliceArray = array5.splice(1, 2, "Shahid", "Ahmed")
console.log(array5); // Output: [ 'Arsalan', 'Shahid', 'Ahmed', 'Naeem', 'Farooq' ]
console.log(spliceArray); // Output: [ 'Rafay', 'Ayan' ]

// 11. Array.isArray()
let a = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]
let b = "Hello"
let isArray1 = Array.isArray(a)
let isArray2 = Array.isArray(b)
console.log(isArray1); // Output: true
console.log(isArray2); // Output: false

// 12. indexOf()

let array6 = ["Arsalan", "Rafay", "Ayan", "Arsalan", "Farooq"]
let index = array6.indexOf("Arsalan")
console.log(index); // Output: 0

let index2 = array6.indexOf("Arsalan", 2)
console.log(index2); // Output: 3

// When your value do not exist in you your array, The result will be -1
let index3 = array6.indexOf("Shahid")
console.log(index3); // Outputz: -1

// 13. lastIndexOf()
let array7 = ["Arsalan", "Rafay", "Ayan", "Arsalan", "Farooq"]
let lastindex = array7.lastIndexOf("Arsalan")
console.log(lastindex); // Output: 3

let lastindex2 = array7.lastIndexOf("Arsalan", 2)
console.log(lastindex2); // Output: 0

// When your value do not exist in you your array, The result will be -1
let lastindex3 = array7.lastIndexOf("Shahid")
console.log(lastindex3); // Output: -1

/* ********* Note ********* */
// Difference between indexOf and lastIndexOf 
// indexOf: indexOf shuro se search krna start krta hai
// lastIndexOf: lastIndexOf aakhir se search krna start krta hai

//  14. includes()
// let array8 = ["Arsalan", "Rafay", "Ayan", "Naeem", "Farooq"]

// let includeMethod1 = array8.includes("Arsalan")
// console.log(includeMethod1) // Output: true

// let includeMethod2 = array8.includes("arsalan")
// console.log(includeMethod2) // Output: true

// 15. some()
// Ye check kr rha hai k kya koi 18 se bara hai hamari array may ya nahi

let ages = [12,33,14,44,16]
function adultAge(age:number){
 return age >= 18
}

let y  = ages.some(adultAge)
console.log(y) // Output: true

// 16. every()
// Ye check kr rha hai k kya sab 18 se baray hai hamari array may ya nahi

let z = ages.every(adultAge)
console.log(z) // Output: false

// 17. find()
let find = ages.find(adultAge)
console.log(find) // Output: 33

// 18. findIndex()
let findIndex = ages.findIndex(adultAge)
console.log(findIndex); // Output: 1 (Index number)

// 19. filter()
// It makes new array without changing original array
let filter = ages.filter(adultAge)
console.log(ages); // Output: [ 12, 33, 14, 44, 16 ]
console.log(filter); // Output: [ 33, 44 ]

// 20. toString()
let toStrings = ["Arsalan", "Rafay", "Ayan", "Arsalan", "Farooq"]
let toStringArray = toStrings.toString()
console.log(toStringArray); // Output: Arsalan,Rafay,Ayan,Arsalan,Farooq

// 21. valueOf()
let valueOfArray = ["Arsalan", "Rafay", "Ayan", "Arsalan", "Farooq"]
let valueOfArrayString = valueOfArray.valueOf()
console.log(valueOfArrayString); // Output: [ 'Arsalan', 'Rafay', 'Ayan', 'Arsalan', 'Farooq' ]

// 22. fill()
let fillArray = ["Arsalan", "Rafay", "Ayan", "Arsalan", "Farooq"]
let fill = fillArray.fill("Hello")
console.log(fill); // Output: [ 'Hello', 'Hello', 'Hello', 'Hello', 'Hello' ]

// 23. forEach()
let forEachArray = ["Arsalan", "Rafay", "Ayan", "Arsalan", "Farooq"]
forEachArray.forEach((value, index) => {
    console.log(`Value: ${value}, Index: ${index}`);
});