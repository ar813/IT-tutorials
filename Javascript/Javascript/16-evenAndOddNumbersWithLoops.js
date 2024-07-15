/* ********** Even & Odd Numbers with Loops ********** */
function evenOdd() {
    for (var i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            document.write("Even: " + i + "<br>");
        }
        else {
            document.write("Odd: " + i + "<br>");
        }
    }
}
