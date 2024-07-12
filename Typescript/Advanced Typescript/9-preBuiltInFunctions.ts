/* ************ Pre built-in Functions ************ */

let userNames = ["Arsalan","Rafay","Ayan"]

function pushNewNameInTheAboveArray (newName:string){
    userNames[userNames.length] = newName
}
pushNewNameInTheAboveArray("Naeem")
pushNewNameInTheAboveArray("Naveed")
pushNewNameInTheAboveArray("Kashif")
console.error(userNames);

// i. push (It can add the value in the end of an array)
// ii. pop (It can delete the value in the end of an array)
// iii. shift (It can delete the value in the start of an array)
// iv. unshift (It can add the value in the start of an array)

// v. splice (It can delete or update or add the value in the middle of an array, in the start of an array or in the end of an array)
// There are three arguments of splice method or function.
// a. Starting index for deleting ir adding
// b. No of deleting index
// c. if you add some thing you can pass it into third index

let arr = ["Arsalan","Hammed","Ahmed","Salman"]
arr.splice(2,1,"Rafay Khan")
console.log(arr); // Output: [ 'Arsalan', 'Hammed', 'Rafay Khan', 'Salman' ]

let arr1 = ["Arsalan","Hammed","Ahmed","Salman"]
arr1.splice(2,0,"Rafay Khan")
console.log(arr1); // Output: [ 'Arsalan', 'Hammed', 'Rafay Khan', 'Ahmed', 'Salman' ]

let arr2 = ["Arsalan","Hammed","Ahmed","Salman"]
arr2.splice(2,2)
console.log(arr2); // Output: [ 'Arsalan', 'Hammed' ]