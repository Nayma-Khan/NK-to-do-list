
import inquirer from 'inquirer'
let todos = [];
let condition = true;
while(condition){
let addTask =  await inquirer.prompt(

    [
    
    {
     name:'todo',
     type: 'input',
     message: "What do  you want to add in your Todos?"
    },

    {
        name:'complete',
        type:'confirm',
        message:"Do you what to add more?",
        default:"false"
   
       }
]

);

todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos)

}