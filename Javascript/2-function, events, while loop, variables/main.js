"use strict";
// Function
function funcName(num1, num2) {
    let sum = num1 + num2;
    //@ts-ignore
    document.write(sum);
    document.write("<br>");
}
funcName(3, 6);
// Function with return statement
function funcName2(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let result = funcName2(36, 4);
//@ts-ignore
document.write(result);
// Global & Local Variable
let a = 5;
function funcName3() {
    let b = 10;
    document.write("<br>");
    document.write(a + b + "<br>");
}
funcName3(); // output: 15
document.write(a + "<br>"); // output: 5 because this is global variable
document.write(b + "<br>"); // output: b is not defined because this is local variable (Error found in browser's console)
// JavaScript Events 
// You can use all events with all tags of HTML
// But there is are some exeptions
// i. onkeypess (Only uesd with body or form tags)
// ii. onresize (Only uesd with body tag)
// iii. onscroll (Only uesd with body or div tags)
// iv. onload (Only uesd with body tag)
// v. onunload (Only uesd with body tag)
function hello() {
    document.write("Hello World");
}
// While loop
function table(value) {
    let i = 1;
    while (i <= 10) {
        let table = `${i} X ${value} = ${i * value} <br>`;
        document.write(table);
        i++;
    }
}
function button() {
    let number = prompt("Write the table you want here");
    if (number !== null) {
        table(Number(number));
    }
}
