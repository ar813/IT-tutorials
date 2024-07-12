/* ************ TypeScript Types ************ */

let isString: string = "Arsalan"
let isNumber: number = 3
let isBoolean: boolean = true
let isNull: null = null // Empty variable (Means this variable have no value)
let isUndefined: undefined = undefined // variable ko define nhi kya gya hai
let isVoid: void = undefined // When we do not "return" any thing specially in funtions

function exampleOfVoid(): void {
    console.log("Hello");
}

let isAny: any = 98 // Anything (Don't cheak type)
isAny = "I am Arsalan"
isAny = true

let isUnknown: unknown = "string" // I dont know (Baad may hamay type maloom hojaigi)
isAny = 45
isAny = true

let isNever = (): never => {
    throw new Error("Something went wrong")
}// Jab hamay error throw krna hai ya catch may error dana hai or kuch return nhi krna hai

let isObject: {
    name: string,
    age: number,
} = {
    name: "Arsalan",
    age: 20
}

let isArray: string[] = ["Arsalan"]
type Objects = {
    name: string,
    age: number,
}
let tupple: [string, number, boolean, Object] = ["Arsalan", 7, true,{name:"Arsalan", age:18}]

type ObjectInArray = {
    name: string,
    age: number,
} 
let objectInArray:ObjectInArray[] = [{name:"Arsalan",age:45}]
