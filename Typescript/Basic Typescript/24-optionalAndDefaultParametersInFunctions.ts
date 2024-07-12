/* ************** Optional and Default Parameters in functions  ************** */

// TypeScript allows you to define optional and default parameters in functions. 
// Optional parameters are denoted by appending a ? symbol after the parameter name.
// And default parameters are specified by providing a default value in the parameter declaration.

// 1. Default Parameter
let greet1 = (name:string = "Areslan", id:number = 1):string => {
    return `Welcom ${name}, your id is ${id}`
}
console.log(greet1("Rafay",2)); // Default Parameters

// 2. Optional Parameter
let greet2 = (name:string, id?:number):string => {
    if(id){
        return `Welcom ${name}, your id is ${id}`
    }else{
        return `Welcom ${name}`
    }
}
console.log(greet2("Arsalan")); // Optional Parameter
console.log(greet2("Arsalan",3)); // Optional Parameter