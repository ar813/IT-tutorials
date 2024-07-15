/* ********** Global & Local Variable ********** */
let a = 5
function funcName3(){
    let b = 10
    document.write("<br>")
    document.write( a+b + "<br>")
}
funcName3() // output: 15
document.write(a + "<br>") // output: 5 because this is global variable
document.write(b + "<br>") // output: b is not defined because this is local variable (Error found in browser's console)
