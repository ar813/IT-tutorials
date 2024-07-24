/* ************** Call Signature ************** */

// The function call signature refers to the declaration or definition of a function, which includes the function's name, parameters, and return type. It defines the structure and type information of a function without including the function's implementation or body.

// Lets add one function inside the object. It's more like creating a method in object
// Very Important: call signatures are typically used inside object type notations to describe the shape of functions within object types.

type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string // Call Signature Method
}

let student1: Student = {
    name: "Arsalan",
    age: 29,
    greet: (country: string) => {
        return `Welcome! My name is ${student1.name}, I am ${student1.age} years old. And I am from ${country}`;
    }
}
console.log(student1.greet("Pakistan"));

// Its is complecated but its your homework that get information about it.
const introduction = (value: Student): string => {
    const {name, age,} = value;
    return `Welcome! My name is ${name}, I am ${age} years old.`;
}
console.log(introduction(student1));