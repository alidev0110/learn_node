import path from 'path';

const data = path.join("text.js");
const data1 = path.resolve("data","text.js");

console.log("---" + data);
console.log("---" + data1);



console.log("---" + path.basename(
   data1
));
console.log("---" + path.dirname(
   data1
));
console.log(
    path.extname("cat.png")
);


export default data;

