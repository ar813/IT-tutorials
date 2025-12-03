/* ********** Logical Operators ********** */
let num1 = 4
let num2 = 232
let num3 = 6

if (num3 > num1 && num3 > num2) {
    document.write("num3 is greater than num2 and num4")
} else if (num3 > num1 || num3 > num2) {
    document.write("num3 is greater than num2 or num4")
}

document.write("<br>")

if (num3 != num1 && num3 != num2) {
    document.write("num3 is not equal to num1 and num2")
}