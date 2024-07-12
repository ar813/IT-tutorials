/* ************** Even Numbers ************** */
// Check Even Number as a boolean by a function
function isEven(a:number):boolean{
    return a % 2 == 0
}
console.log(isEven(5))

// Home Work: Check divisible of 4 and 8 as a boolean by a function
function isDivisibleBy4and8(a:number):boolean{
    return a % 4 == 0 && a % 8 == 0
}
console.log(isDivisibleBy4and8(16))