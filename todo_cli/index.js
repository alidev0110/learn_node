import fs from 'fs';
import path from 'path';
import { addTask , deleteTask , updateTask, readTask } from './todo.js';
import {tasksFilePath} from './config.js';


if (!fs.existsSync(tasksFilePath)) {
    fs.writeFileSync(tasksFilePath, "[]");
}

if(process.argv.length > 2 && process.argv[2] === "delete") {
    deleteTask(Number(process.argv[3]));
}
else if(process.argv.length > 2 && process.argv[2] === "update") {
    const id = Number(process.argv[3]);
    const name = process.argv[4];
    const description = process.argv[5];
    const updatedTask = { name, description };
    updateTask(id, updatedTask);
}

else if(process.argv.length > 2 && process.argv[2] === "read") {
    const id = process.argv[3] === "id" ? Number(process.argv[4]) : "";
    const name = process.argv[3] === "name" ? process.argv[4]: "";
    const description = process.argv[3] === "description" ? process.argv[4] : "";
    readTask(id, name, description);
}


else if (process.argv.length > 2) {
    const id = JSON.parse(fs.readFileSync(tasksFilePath, "utf8")).length + 1;
    const name = process.argv[2]
    const description = process.argv[3];
    const task = { id, name, description };
    addTask(task);
}












