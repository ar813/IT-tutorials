/* ********** Break & Continue Statement  ********** */
// Break & Continue Statements are used with loops only
function continues() {
    for (var i = 0; i <= 10; i++) {
        if (i == 3) {
            document.write("Hello: " + i + "<br>");
            continue;
        }
        document.write("Number: " + i + "<br>");
    }
    // @ts-ignore
    document.getElementById('output').innerHTML;
}
function breaks() {
    for (var i = 0; i <= 10; i++) {
        if (i == 3) {
            document.write("Hello: " + i + "<br>");
            break;
        }
        document.write("Number: " + i + "<br>");
    }
    // @ts-ignore
    document.getElementById('output').innerHTML;
}
