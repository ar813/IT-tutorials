/* ********** new Array ********** */
// [] = new Array()

function toDo() {
    let array = new Array()

    for (let j = 0; j < 3; j++) {
        array[j] = prompt("Enter the value")
    }
    document.write("<ul>")
    for (let a = 0; a < array.length; a++) {
        document.write("<li>" + array[a] + "</li>");
    }
    document.write("</ul>")
}