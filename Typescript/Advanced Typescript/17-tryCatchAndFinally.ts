/* ************ try,catch and finally (Run time error) ************ */

// "try" works when code have no error
try{
    let a = 9
    console.log(a);
}
// "catch" works when "try" have any error. It depends on "try".
catch(err){
    console.log("err" + err); 
}
// "finally" works when "try" have any error or no error. Means finally works on both cases. It also depends on "try".
finally{
    console.log("finally");
}

async function f (){
    try{
        console.log("before error");
        let a = 9
        let b = 10
        let c = a + b
        console.log(c);
        throw new Error("Something went wrong")
        console.log("After error");

    }
    catch(err){
        console.log("New" + err);
    }
    finally{
        console.log("finally");
    }
}
f()