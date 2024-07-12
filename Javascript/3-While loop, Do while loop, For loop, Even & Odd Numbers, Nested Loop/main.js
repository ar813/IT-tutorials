"use strict";
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
document.write("<br><br>");
// Do while loop
// For loop
// Break & Continue Statement 
// Break & Continue Statements are used with loops only
for (let i = 0; i <= 10; i++) {
    if (i == 3) {
        document.write("Hello: " + i + "<br>");
        continue;
    }
    document.write("Number: " + i + "<br>");
}
document.write("<br>");
for (let i = 0; i <= 10; i++) {
    if (i == 3) {
        document.write("Hello: " + i + "<br>");
        break;
    }
    document.write("Number: " + i + "<br>");
}
// Even & Odd Numbers with Loops
document.write("<br>");
function evenOdd() {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            document.write("Even: " + i + "<br>");
        }
        else {
            document.write("Odd: " + i + "<br>");
        }
    }
}
evenOdd();
// Nested Loop 
document.write("<br>");
for (let i = 1; i <= 100; i = i + 10) {
    for (let j = i; j < i + 10; j++) {
        document.write(j + " ");
    }
    document.write("<br>");
}
