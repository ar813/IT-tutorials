// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName = "Arsalan";
var greeting = "Hello " + personName + ", would you like to learn some Typescript today?";
console.log(greeting);
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person = "muhammad arsalan khan";
var lowercase = person.toLowerCase();
var uppercase = person.toUpperCase();
var titlecase = person.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
// OR (for title case)
var empty = "";
var array = person.split(" ");
for (var i = 0; i < array.length; i++) {
    var logic = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase() + " ";
    empty += logic;
}
console.log(lowercase);
console.log(uppercase);
console.log(titlecase);
console.log(empty);
// replace method
// Example No 1
var str = "Arsalan";
var replace = str.replace(str, "Rafay");
console.log(replace); // Rafay
// Example No 2
var replace1 = str.replace("A", "a");
console.log(replace1); // arsalan
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log("Albert Einstein once said," + " " + '"Imagination is more important than knowledge."');
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, \"Imagination is more important than knowledge.\"");
console.log(message);
// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var nameWithWhitespace = "\tJohn Doe\n";
console.log("'".concat(nameWithWhitespace, "'"));
var nameStripped = nameWithWhitespace.trim();
console.log("'".concat(nameStripped, "'"));
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
var a = 10;
var b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
// 8. You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 13;
var message1 = "My favorite number is: ".concat(favoriteNumber);
console.log(message1);
// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// My name: Arsalan
// Current date: 3-7-2024
// I am completing my 45 assignments
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Rafay", "Ayan", "Ahmed", "Kashif"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// OR
names.forEach(function (index) { console.log(index); });
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
names.forEach(function (index) { console.log("Hello, ".concat(index, "; ")); });
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var list = ["Honda", "Toyota", "BMW", "Unique"];
list.forEach(function (mode) {
    console.log("I would like to own a ".concat(mode, "."));
});
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.clear();
var guestList = ["Rafay Khan", "Ahmed Hussain", "Ayan Khan"];
guestList.map(function (guest) {
    console.log("Dear ".concat(guest, ", I am honored to extend an invitation to you for a dinner at my home."));
});
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log("\nUnfortunately, ".concat(guestList[1], " can't make it to the dinner.\n"));
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var newGuest = "Salman";
guestList.splice(1, 0, "".concat(newGuest));
// • Print a second set of invitation messages, one for each person who is still in your list.
