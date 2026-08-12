import fs from "fs";


fs.writeFileSync("text1.txt", "Hello World");

fs.writeFileSync("text.txt", "Ali");

fs.appendFileSync("text.txt", "\nSecond Line");

const data = fs.readFileSync("./text.txt", "utf-8");

// fs.unlinkSync("text.txt");
export default data;
