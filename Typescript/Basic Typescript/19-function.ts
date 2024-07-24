/* ************** Functions ************** */

// i. Function Declaration: You can declare a function using the function keyword, followed by the function name, a list of parameters enclosed in parentheses, and a return type.
// ii. The function body contains the code that will be executed when the function is called.
// iii. Function Invocation: To execute a function, you simply invoce it by using its name followed by parentheses.
// iv. You can provide arguments (actual values) for the parameters defined in the function declaration.

// 1. Normal function: 
function greet(name:string, id:number):void{
    console.log(`Hello ${name}, your id is ${id}`);
}
greet("Arsalan",1)

// 2. Fat arrow function: (or Lamda function)
let greet1 = (name:string, id:number):void => {
    console.log(`Hello ${name}, your id is ${id}`);
}
greet1("Arsalan",1)

// 3. Anonymouse function: 
let greet2 = function(name:string, id:number):void {
    console.log(`Hello ${name}, your id is ${id}`);
}
greet2("Arsalan",1)

// Return type: To specify the return type of a function, you can use the colon (:) followed by the desired type after the function's parameter list.

let greet3 = (name:string, id:number):string => {
    return `Hello ${name}, your id is ${id}`
}
const myGreet = greet3("Arsalan",1)
console.log(myGreet);