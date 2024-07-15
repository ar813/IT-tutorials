/* ********** Array ********** */
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr);
console.log(arr[3]);
// Example of array
function arrays() {
    var sum = 0;
    document.write("<ul>");
    for (var i = 0; i < arr.length; i++) {
        document.write("<li>" + arr[i] + "</li>");
        sum = sum + arr[i];
    }
    document.write("</ul>");
    document.write("Total Sum: ".concat(sum));
}
