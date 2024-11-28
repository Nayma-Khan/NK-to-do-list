"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer_1.default.prompt([
        {
            name: 'todo',
            type: 'input',
            message: "What do  you want to add in your Todos?"
        },
        {
            name: 'complete',
            type: 'confirm',
            message: "Do you what to add more?",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
