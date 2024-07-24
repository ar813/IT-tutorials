/* ************** Arrays Methods and Iterations ************** */

let fruits: string[] = ["Apple", "Banana", "Orange", "Mango"]

// a. Adding elements to an array using push() method at the end of the array. This method can add one or more than one elements.
fruits.push("Watermelon", "Melon")
console.log(fruits);

// b. Removing element to an array using pop() method at the end of the array. This method can remove only one lase element.
fruits.pop()
console.log(fruits);

// c. Adding elements to an array using unshift() method at the start of the array. This method can add one or more than one element.
fruits.unshift("Watermelon", "Melon")
console.log(fruits);

// d. Removing element to an array using pop() method at the start of the array. This method can remove only one first element.
fruits.shift()
console.log(fruits);

// Note: If you want to remove more than one element at the end of the array or at the start of the array, you have to write pop() or shift() method more than one time.
let vegetables = ["Ladyfinger", "Onion", "Potato"]
vegetables.pop()
vegetables.pop()
// OR ***********
let vegetables1 = ["Ladyfinger", "Onion", "Potato"]
vegetables.shift()
vegetables.shift()

// Iterating over elements:
// You can iterate over the elements of an array using various looping constructs such as for, for... of, or array methods like forEach.
// In TypeScript (and in general programming), "iterate" means to repeatedly execute a set of instructions.

// Using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using for... of
for (let value of fruits) {
    console.log(value);
}

// Using array method "forEach"
fruits.forEach(fruit => {
    console.log(fruit);
});

// If you want to take index you can use for in loop
for (let value in fruits){
    console.log(value)
}