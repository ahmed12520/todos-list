import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input" + "list",
            message: "what would you like to add in todos ? ",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "would you like to add more in your todos? ",
            default: "true",
        }
    ]);
    todos.push(todoQuestion.firstQuestion);
    console.log(todos);
    condition = todoQuestion.secondQuestion;
}
