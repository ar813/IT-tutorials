/* ************** Enums ************** */

// Enums in TypeScript are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.
// In TypeScript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default numeric value for the first enum constant is 0, and subsequent enum constants receive values incremented by 1.

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
let isAdmin = (user1:LoginDetail)=>{
    const {name,role} = user1
    return role === "admin" ? `${name} is allow to edit the website` : `${name} is not allow to edit the website`
}
console.log(isAdmin(user1));
console.log(isAdmin(user2));
