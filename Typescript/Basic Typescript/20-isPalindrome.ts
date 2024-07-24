/* ************** isPalindrome ************** */

// isPalindrome (means the string is equal to the reverse of itself such as, 12321 = 12321 (the reverse of it) )
// .split("") can seperate strings (like abc, "a","b","c")
// .reverse() can reverse the values (like abc, cba)
// .join("") can join  the values (like "a","b","c", abc)

const isPalindrome = (palin:string):boolean => {
    let myPalin = palin.split("").reverse().join("")
    return myPalin === palin
}
console.log(isPalindrome("123456")); // false