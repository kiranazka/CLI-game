#! usr/bin/env node
import inquirer from "inquirer";
console.log("\nWelcome to Azka project the CLI Number Guessing Game");
// variable const rendomNumber math.floor
const rendomNumber = Math.floor(Math.random() * 1 + 5);
// user input prompt use create  variable answer 
const answer = await inquirer.prompt([
    {
        // use name type or message
        name: "userGuessNumber",
        type: "number",
        message: "\nEnter your Guess Number(Number Limit from 1 to 5):",
    },
]);
// IF/Else Statement use
if (answer.userGuessNumber === rendomNumber) {
    console.log("Congratulation !  You guess a Correct Number.");
}
else {
    console.log("sorry !  You guess Number is inCorrect.");
}
