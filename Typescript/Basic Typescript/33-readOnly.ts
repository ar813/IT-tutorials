/* ************** Read only ************** */

type Array1 = readonly [string,string,string]
let array1:Array1 = ["Arsalan","Rafay","Ayan"]
let array2:Array1 = ["Naeem","Rafay","Ayan"]

// Now you can read only the array, not edit it like:
array1.push("Coding")
array2.push("Coding")