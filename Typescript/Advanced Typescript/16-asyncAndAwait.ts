/* ************ Async and Await ************ */

//@ts-ignore
import inquirer from "inquirer";
console.log("first");
async function uploadUser() {
    await inquirer.prompt(
        [
            {
                type: "input",
                name: "name",
                message: "Enter your name"
            }
        ]
    )
        .then((hello) => {
            console.log(hello);            
        }).catch((Khan) => {
            console.log(Khan);
        })
    await inquirer.prompt(
        [
            {
                type: "input",
                name: "name",
                message: "Enter your name"
            }
        ]
    )
}
await uploadUser()

console.log("third");
