// Import and Export
import funcName from "./app.js" // defalt export (Defalt export can use only one time in a file. And you can change name at time of import like func to funcName)
import {a,b} from "./app.js" // normal export (normal export can use a lot of time in a file. And you cannot change name at time of import like func to funcName)

console.log(funcName(4,5));
console.log(a + b);
