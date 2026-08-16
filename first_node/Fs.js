import fs from "fs";

fs.writeFile("text1.txt", "Hello World" , (err) => {
  if (err) {
    console.log(err);
  }
});

fs.writeFile("text.txt", "Ali", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.appendFile("text.txt", "\nSecond Line", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("exe");

// fs.unlinkSync("text.txt");
// export default data;
