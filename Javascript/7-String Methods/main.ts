// String Methods
let str = "Typescript is a great language"

// 1. length
let lengths = str.length
console.log(lengths); // Output: 30

// 2. toUpperCase()
let toUpperCase = str.toUpperCase()
console.log(toUpperCase); // Output: TYPESCRIPT IS A GREAT LANGUAGE

// 3. toLowerCase()
let toLowerCase = str.toLowerCase()
console.log(toLowerCase); // Output: typescript is a great language

// 4. includes() 
// It is used for searching, and the result will be get in boolean form
let includes = str.includes("great")
console.log(includes); // Output: true
let includes1 = str.includes("Great")
console.log(includes1); // Output: false

// 5. startsWith()
// It is used for searching the first value only, and the result will be get in boolean form
let startsWith1 = str.startsWith("Typescript")
console.log(startsWith1); // Output: true
let startsWith2 = str.startsWith("T")
console.log(startsWith2); // Output: true
let startsWith3 = str.startsWith("Javascript")
console.log(startsWith3); // Output: false

// 6. endsWith()
// It is used for searching the last value only, and the result will be get in boolean form
let endsWith1 = str.endsWith("language")
console.log(endsWith1); // Output: true
let endsWith2 = str.endsWith("e")
console.log(endsWith2); // Output: true
let endsWith3 = str.endsWith("languag")
console.log(endsWith3); // Output: false

// 7. search()
// includes() = search()
// But we get includes's result in boolean form, but in serach's method we get result in index form
let search = str.search("is")
console.log(search); // Output: 11 

// 8. match()
// search() = match()
// But it gives result in array form
let match = str.match(/is/g) // g means globally. Which you want to search write it in /value/
console.log(match); // Output: [ 'is' ] 

// 9. indexOf()
// It start searching in the start of the string, when it get result it stops cheaking
let indexOf = str.indexOf("i")
console.log(indexOf); // Output: 7

// 10. lastIndexOf()
// It start searching in the start of the string, when it get result it stops cheaking, But here is a twist it gives the value of last one
let lastIndexOf = str.lastIndexOf("i")
console.log(lastIndexOf); // Output: 11

// 11. replace()
let replace = str.replace("Typescript", "Javascript")
console.log(replace); // Output: Javascript is a great language

// 12. trim()
// It is used to remove extra spaces at the start of the string and at the end of the string
let str2 = "    Typescript is a great language    "
console.log(str2); // Output:     Typescript is a great language    
let trim = str2.trim()
console.log(trim); // Output: Typescript is a great language

//  13. charAt()
// It takes index and give value
let charAt = str.charAt(3)
console.log(charAt); // Output: e

// 14. charCodeAt()
// It takes index and give skycode
let charCodeAt = str.charCodeAt(3)
console.log(charCodeAt); // Output: 101

// 15. fromCharCode()
// It is not work on string, infact in is a built-in function
let fromCharCode = String.fromCharCode(101)
console.log(fromCharCode); // Output: e

// 16. concat()
// It is used to comibne two strings
let s1 = "Typescript"
let s2 = " is a great language"
let concat = s1.concat(s2)
console.log(concat); // Output: Typescript is a great language

// 17. split()
let split = str.split(" ")
console.log(split); // Output: [ 'Typescript', 'is', 'a', 'great', 'language' ]

// 18. repeat()
// It can repeat the strings
let repeat = str.repeat(2) 
console.log(repeat); // Output: Typescript is a great languageTypescript is a great language

// 19. slice()
// It also work on negative values
let slice = str.slice(0,5)
console.log(slice); // Output: Types
let slice1 = str.slice(5)
console.log(slice1); // Output: cript is a great language

// 20. substr()
// substr() = slice()
// lakin ak chota sa faraq hai wo ye k phla parameter jo k ak index ha string ka ye us index se string ko print krna shroo krdega or dosray index gitna karay ga, dosray index tak nhi karay ga matlab ager parameterOne 2 hai or parameterTwo 3 hai to result index2 se lekr 3 letters agay tak aayga
let substr = str.substr(2,3)
console.log(substr); // Output: pes

// 21. substring()
// substring() = slice()
let substring = str.substring(0,5)
console.log(substring); // Output: Types

// 22. toString()
let number = 278
let string = number.toString()
console.log(string); // Output: "278"

// 23. valueOf()
// valueOf() = str 
// it is a defalt function of string
let valueOf = str.valueOf()
console.log(valueOf); // Output: Typescript is a great language
