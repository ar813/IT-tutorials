// Import and Export
import funcName from "./app.js" // defalt export (Defalt export can use only one time in a file. And you can change name at time of import like func to funcName)
import {a,b} from "./app.js" // normal export (normal export can use a lot of time in a file. And you cannot change name at time of import like func to funcName)

console.log(funcName(4,5));
console.log(a + b);



// 1. Object in array with type
type CarTypes = {
    name: string;
    year: number;
}

let car:CarTypes[] = [{
    name: 'BMW',
    year: 2018
},
{
    name: 'Audi',
    year: 2019
}
]
console.log(car[1].name);

// 2. Array in loops
let arr:string[] = ["Car","laptop","Bike","Table"]
for(let i=0; i<arr.length; i++){
    let element = arr[i]
    console.log(element);
}


