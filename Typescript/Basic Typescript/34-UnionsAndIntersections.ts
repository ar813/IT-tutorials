/* ************** Unions and Intersections ************** */

/* ************** Unions  ************** */

let userInput = (value: number|string|boolean):string|number =>{
    if (typeof value === "string"){
        return value.toUpperCase()
    }else if(typeof value === "number"){
        return value * 2
    }else{
        throw new Error("Invali Input")
    }
}
console.log(userInput(10));
console.log(userInput("Arsalan"));

/* ************** Intersections ************** */

type Person = {
    name: string;
    age: number;
    gender?: string;
}
type Emploee = {
    id: number,
    salary: number
}

type EmploeeDetails = Person & Emploee

let emploee1: EmploeeDetails = {
    name: "Arsalan",
    age: 29,
    gender: "Male",
    id: 1,
    salary: 100000
}

