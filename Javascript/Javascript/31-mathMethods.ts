/* ********** Math methods ********** */

// 1. ath.ceil()
// ye decimal values per hi kam krta hai
let ceil = Math.ceil(1.4)
console.log(ceil); // Output: 2
// ye 1 se bari value ko print kr dega yani k 2
let ceil1 = Math.ceil(5.5453)
console.log(ceil1); // Output: 6 (5 se bari value yani k 6)
// agar value negative hai to ye point k baad walo value ko print nhi kray ga
let ceil2 = Math.ceil(-2.45)
console.log(ceil2); // Output: -2

// 2. Math.floor()
// ye point k baad wali value ko print nhi krta hai
let floor = Math.floor(2.3)
console.log(floor); // Output: 2
// agar value negative hai to ye point pehla wala ki bari value ko print karayga
let floor1 = Math.floor(-2.3)
console.log(floor1); // Output: -3

// 3. round()
// roundoff krta hai
let round = Math.round(1.56) 
console.log(round);// Output: 2

// 4. trunc()
// ye point k baad wali value ko print nhi karaga
let trunc = Math.trunc(5.7)
console.log(trunc); // Output: 5

// 5. max()
let max = Math.max(1,2,3,4,5,65)
console.log(max); // Output: 65

// 6. min()
let min = Math.min(-1, 10)
console.log(min); // Output: -1

// 7. sqrt()
// square root
let sqrt = Math.sqrt(49)
console.log(sqrt); // Output: 7

// 8. cbrt()
// cubic root
let cbrt = Math.cbrt(125)
console.log(cbrt); // Output: 5

// 9. pow()
// power
let pow = Math.pow(2,3)
console.log(pow); // Output: 8

// 10. random()
// random number b/w 0 and 1
let random = Math.random()
console.log(random);
// random number b/w 1 and 10
let random2 = Math.floor( Math.random() * 10) + 1 // +1 matlab 1 se nichay nhi gana hai
console.log(random2);

// 11. abs()
// absulute value
// isay positive, negative ya ksi or value se koi sarokaar nhi hai ye aap ko ak absulote value dedaga
let absulute = Math.abs(-1.5)
console.log(absulute); // Output: 1.5

// 12. PI()
let pi = Math.PI
console.log(pi); // Output: 3.141592653589793