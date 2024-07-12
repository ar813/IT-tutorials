"use strict";
// you can write any statement which you can show on your web page using document.write("") but in double quotation
document.write("Hello Javascript");
// if you want to use html tags in javascript, you can write it also in document.write("") but in double quotation
document.write("<br>");
document.write("<i>I am Muhammad Arsalan Khan</i>");
// Variable : let, var, const
let arr = ["Rafay", "Arsalan"];
document.write("<h1>" + arr + "</h1>");
document.write(typeof arr); // Object
let obj = { name: "Arsalan" };
document.write(typeof obj); // Object
// Arithmetic Operators
let a = 5;
let b = 6;
let c = a + b;
document.write("<h1>" + c + "</h1>");
// console.log (This will show in inspect in console)
let arrayInFormOfConsole = [3, 5, 6, 4, 3, 5, 7];
console.log(arrayInFormOfConsole);
// console.table (It is used to see result in the form of table)
let arrayInFormOfTable = [3, 5, 6, 4, 3, 5, 7];
console.table(arrayInFormOfTable);
// console.error (It is used to see errors in some specific conditions)
console.error("Something sent wrong");
// console.warn (It is used to show warnings)
console.warn("It is just warning");
// console.clear used to clear all console
console.clear();
// console.time("Value(any string)")
// console.timeEnd("Value(any string)")
// It is used to measure time 
console.time("Test");
console.warn("It is just warning");
console.warn("It is just warning");
console.warn("It is just warning");
console.warn("It is just warning");
console.warn("It is just warning");
console.timeEnd("Test");
// You can also write javascript code in console such as
// document.write("Any value")
// document
// document.getElementById("ID of any tag of html")
// document.getElementById("ID of any tag of html").innerText
// document.getElementById("ID of any tag of html").innerHTML
// Comparison Operators
let d = 3;
let e = "3";
//@ts-ignore
console.log(d == e); //true in JS (value checking)
//@ts-ignore
console.log(d === e); //false in JS (value checking with type)
console.log(null == undefined); //true in JS (value checking)
console.log(null === undefined); //false in JS (value checking with type)
console.clear();
// If else/else if statements
let num1 = 232;
let num2 = 6;
if (num1 > num2) {
    document.write("num1 is greater than num2");
}
else {
    document.write("num1 is less than num2");
}
document.write("<br>");
// Logical Operators
let num3 = 232;
let num4 = 6;
if (num3 > num4 && num3 > num2) {
    document.write("num3 is greater than num2 and num4");
}
else if (num3 > num4 || num3 > num2) {
    document.write("num3 is greater than num2 or num4");
}
document.write("<br>");
if (num3 != num4) {
    document.write("num3 is not equal to num4");
}
document.write("<br>");
// Ternary Operators (If else only not else if)
let numA = 3;
let numB = 4;
let result = (numA > numB) ? "numA is greater than numB" : "numA is less than numB"; // round braket is optional in place of condition
document.write(result);
document.write("<br>");
// swich case
let day = 1;
switch (day) {
    case 1:
        document.write("Day 1");
        break;
    case 2:
        document.write("Day 2");
        break;
    case 3:
        document.write("Day 3");
        break;
    case 4:
        document.write("Day 4");
        break;
    case 5:
        document.write("Day 5");
        break;
    case 6:
        document.write("Day 6");
        break;
    case 7:
        document.write("Day 7");
        break;
    default:
        document.write("Invalid input");
        break;
}
// Alert box
alert("Welcome");
// Confirm Box
let confirmBox = confirm("Do you like our website");
if (confirmBox) {
    alert("Thanks");
}
else {
    alert("Sorry");
}
document.write("<br>");
// Prompt Box
let promptBox = prompt("Enter your name");
alert("Welcome " + promptBox);
document.write("Welcome " + promptBox);
document.write("<br>");
let dayInPromptBox = prompt("Enter Percentage");
if (dayInPromptBox >= 90) {
    document.write("Excelent");
}
else if (dayInPromptBox >= 80) {
    document.write("Very Good");
}
else if (dayInPromptBox >= 70) {
    document.write("Good");
}
else if (dayInPromptBox >= 60) {
    document.write("Nice");
}
else if (dayInPromptBox >= 50) {
    document.write("Poor");
}
else if (dayInPromptBox >= 40) {
    document.write("Need to work Hard");
}
else if (dayInPromptBox < 40) {
    document.write("Fail");
}
