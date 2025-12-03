/* ************** Enums ************** */

// In TypeScript, an enum (short for "enumeration") is a way to define a collection of related values that can be treated as a group. It’s useful when you have a set of constant values and want to make your code more readable and maintainable.
// What is an Enum?
// It allows you to assign names to a group of numeric or string values. (CONSTANT VALUES)
// Makes your code easier to understand compared to using plain numbers or strings.

// By default, enums start with 0 and increment by 1 for each value.

enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right, // 3
}

console.log(Direction.Up);    // Output: 0
console.log(Direction.Right); // Output: 3

// You can also assign custom numbers. 

enum Direction1 {
    Up = 1,   // Starts at 1
    Down = 2, // 2
    Left = 3, // 3
    Right = 4 // 4
}

// If you want names instead of numbers, you can.
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

console.log(Color.Red);   // Output: "RED"
console.log(Color.Green); // Output: "GREEN"


// How to Use Enums?

enum Status {
    Active,
    Inactive,
    Pending,
}

function getStatusMessage(status: Status): string {
    switch (status) {
        case Status.Active:
            return "The status is active.";
        case Status.Inactive:
            return "The status is inactive.";
        case Status.Pending:
            return "The status is pending.";
        default:
            return "Unknown status.";
    }
}

console.log(getStatusMessage(Status.Active)); // Output: The status is active.

// Enums with string values
enum Role {
    Admin = 1, // Starts at 1
    User,      // Automatically gets the next value: 2
    Guest,     // Automatically gets the next value: 3
}

// Example 
enum Role {
    user = "user",
    admin = "admin"
}

type LoginDetail = {
    name: string;
    email: string;
    passward: string;
    role: Role;
}

let user1: LoginDetail = {
    name: "Arsalan",
    email: "abc@gmail.com",
    passward: "sdaq765",
    role: Role.admin
}
let user2: LoginDetail = {
    name: "Rafay",
    email: "rtrcfdv@gmail.com",
    passward: "cfgdbt757",
    role: Role.user
}
let isAdmin = (user1: LoginDetail) => {
    const { name, role } = user1
    return role === "admin" ? `${name} is allow to edit the website` : `${name} is not allow to edit the website`
}
console.log(isAdmin(user1));
console.log(isAdmin(user2));
