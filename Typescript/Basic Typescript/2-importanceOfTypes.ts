/* ************** Importance of types ************** */
// In typescript, types are important
let num = 10;
num = "Ten"  // Type 'string' is not assignable to type 'number'.
num = 55; // Correct, because you are using "number type" in place of "number type"
console.log(num);

/* ************** Importance of types in funtions ************** */
function sum(a:number, b:number){
    return a + b;
}
console.log(sum(5,"Arsalan")); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
console.log(sum(5,10)); // Correct, because parameter "b" has number type and now you are also using number 