/* ********** While Loop ********** */
function table(value) {
    var i = 1;
    while (i <= 10) {
        var table_1 = "".concat(i, " X ").concat(value, " = ").concat(i * value, " <br>");
        document.write(table_1);
        i++;
    }
}
function button() {
    var number = prompt("Write the table you want here");
    if (number !== null) {
        table(Number(number)); // Number() is a method which convert number to string
    }
}
// Do while loop
// For loop
