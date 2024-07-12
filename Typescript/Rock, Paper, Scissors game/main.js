import inquirer from "inquirer";
let input1 = await inquirer.prompt({
    name: "player1",
    type: "list",
    message: "Player 1, choose your weapon:",
    choices: ["Rock", "Paper", "Scissors"]
});
let input2 = await inquirer.prompt({
    name: "player2",
    type: "list",
    message: "Player 2, choose your weapon:",
    choices: ["Rock", "Paper", "Scissors"]
});
if (input1.player1 === input2.player2) {
    console.log("It's a tie!");
}
else if ((input1.player1 === "Rock" && input2.player2 === "Scissors") ||
    (input1.player1 === "Scissors" && input2.player2 === "Paper") ||
    (input1.player1 === "Paper" && input2.player2 === "Rock")) {
    console.log("Player 1 wins!");
}
else {
    console.log("Player 2 wins!");
}
