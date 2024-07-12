/* ************** Any ************** */
// any: The any type is most flexible type in typescript. It essentially turns off all type checking for the variable and expressions it is applied to. We use it When dealing with data from dynamic sources Like userinputs, network responses or json objects, the any type can be usefull.

let myFavNum2:any = 54;
myFavNum2 = "Arsalan";
myFavNum2 = true;

