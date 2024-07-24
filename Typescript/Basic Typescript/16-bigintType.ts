/* ************** Bigint Type ************** */
// i. Bigint Types: It is a built-in type that allows you to work with numbers that are larger than the range supported by the regular "number" type.
// ii. In JS we can't read the whole numbers beyond 2 raise to power 53 (2^53)
// iii. Bigint is written by the "n" suffix at end of the number (Like, 338n)
// iv. You have to change configuration file, when use bigint.
// v. You can check the largest numeric value that JS can support by "Number.MAX_SAFE_INTEGER"

let largestValue = Number.MAX_SAFE_INTEGER
console.log(largestValue);// 9007199254740991

// Is above work in typscript that is well and good but on the other hand, here is another way which is basically depend on type casting. It will inshallah definitely work:

let largestValue1 = (Number as any).MAX_SAFE_INTEGER
console.log(largestValue1);// 9007199254740991

// You can introduce bigint by two methods:

// No 1.
let bigNumber1:bigint = 9007199254740992n
console.log(bigNumber1);
// No 2.
let bigNumber2:bigint = BigInt("90071992547409925")
console.log(bigNumber2);