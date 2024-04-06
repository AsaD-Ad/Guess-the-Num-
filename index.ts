#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 5 );

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 5",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed right number")
}else {
    console.log("You guessed WRONG NUM!")
};

