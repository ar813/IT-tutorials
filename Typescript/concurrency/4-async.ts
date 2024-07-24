/* ********** Asyncronous Programing ********** */

console.log("Start");


setTimeout(function (){
    console.log("Hello!");
},1000)

console.log("The End");

// OR

function greet (){
    console.log("Rafay")
}
setTimeout(greet,2000)