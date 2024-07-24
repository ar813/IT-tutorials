/* ************ sum of even numbers between 1-100 ************ */

let sum = 0
let list:any = []

for(let i=0; i<=100; i++){

    if(i%2==0){
        sum = sum + i
        list.push(i)
    }
    
}

console.log(sum,list);