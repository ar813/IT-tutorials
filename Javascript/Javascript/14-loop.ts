/* ********** While Loop ********** */
function table(value:number){
    let i = 1;
    while (i <= 10) {
        let table = `${i} X ${value} = ${i * value} <br>`;
        document.write(table);
        i++;
    }
}
function button(){
    let number = prompt("Write the table you want here");
    if(number !== null){
        table(Number(number)) // Number() is a method which convert number to string
    }
}

// Do while loop
// For loop