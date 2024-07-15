/* ********** Const Variable ********** */

// We know that we cannot assingn value again to const variable.
// But we can change the value inside the array and Object, but we cannot assingn whole array or object but we can do it one-by-one

// Let's try to change the value inside const array and object

// For Array
const a = ["Flower", "Laptop", "Mobile"]
// a = ["Book"] // error but see blow
a[0] = "Book"
console.log(a); // Output: ["book", "Laptop", "Mobile"]

// For Object
const b = {
    name: "Arsalan",
    age: 18
}
b.name = "Rafay"
console.log(b); //Output: { name: 'Rafay', age: 18 }