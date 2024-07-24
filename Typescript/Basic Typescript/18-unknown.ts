/* ************** Unknown ************** */

// Unknown: The unknown type is a safer alternative to any because it still enforces type checking and type safety.Variables of type unknown can hold values of any type. Unknown type is used when you have no idea about that type. But in future, you will get some knowlege about that type
// unknown has a keyword called typoeOf. you can use it to check your variable or other type.

let num3:unknown;
num3 = 5;
num3 = "Arsalan"
num3 = true
num3 = 7

if(typeof num3 === "number"){
    console.log(num3 + 5);
}
