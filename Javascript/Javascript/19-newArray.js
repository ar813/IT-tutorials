/* ********** new Array ********** */
// [] = new Array()
function toDo() {
    var array = new Array();
    for (var j = 0; j < 3; j++) {
        array[j] = prompt("Enter the value");
    }
    document.write("<ul>");
    for (var a = 0; a < array.length; a++) {
        document.write("<li>" + array[a] + "</li>");
    }
    document.write("</ul>");
}
