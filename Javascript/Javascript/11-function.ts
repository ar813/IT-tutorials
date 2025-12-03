/* ********** Function ********** */

function funcName (num1:number, num2:number):void{
    let sum = num1 + num2
    //@ts-ignore
    document.write(sum)
    document.write("<br>")
} 
funcName(3,6)

// Function with return statement
function funcName2 (num1:number, num2:number):number{
    let sum = num1 + num2
    return sum
} 
let result = funcName2(36,4)
    // @ts-ignore
document.write(result)