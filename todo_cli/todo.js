import fs from 'fs';
import path from 'path';
import {tasksFilePath} from './config.js';


const loadTasks = () => {   
    return fs.readFileSync(tasksFilePath, "utf8")
}


const addTask = (task) => {
    const tasks = []
    tasks.push(...JSON.parse(loadTasks()));
    tasks.push(task);
    const fileTasks = fs.writeFileSync(tasksFilePath, JSON.stringify(tasks));
    console.log("Task added successfully!");
}

const deleteTask = (id) => {
    const tasks = []
    tasks.push(...JSON.parse(loadTasks()));
    const newTask = tasks.filter((task)=> task.id !== id);
    const fileTasks = fs.writeFileSync(tasksFilePath, JSON.stringify(newTask));
    console.log(newTask)
}

const updateTask = (id, updatedTask) => {
    const tasks = []
    tasks.push(...JSON.parse(loadTasks()));
    const newTask = tasks.map((task) => task.id === id ? { ...task, ...updatedTask } : task);
    const fileTasks = fs.writeFileSync(tasksFilePath, JSON.stringify(newTask));
    console.log(newTask)
}

const readTask = (id, name, description) => {
    const tasks = []
    tasks.push(...JSON.parse(loadTasks()));
    const Task = tasks.find((task) => task.id === id || task.name === name || task.description === description);
    console.log(Task)
}



export { addTask , deleteTask , updateTask , readTask};