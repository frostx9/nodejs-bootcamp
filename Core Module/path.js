const path = require("path")

console.log(path.normalize('html-pdf'))
console.log(path.normalize('html-pdf'))  // normalize just remove ./ - it became optional in normalize 

// src/. - it means same directory
// src/.. - it means root directory of src folder

console.log(path.normalize('html-pdf/..'))

console.log(path.basename(__dirname)); // basename retrun only last name file or file directory
console.log(path.basename("./test")); // basename retrun only last name file or file directory...here last is test in string
console.log(path.basename("./test/index.html", ".html")) // second argument for removed from the string

console.log(path.dirname("./html-pdf"));  // dirname return rooy path name of the last folder or file
console.log(path.dirname("./html-pdf/test"));

// to get absolute path - To get complete path of any file or folder
console.log(path.resolve("./")); // D:\Z_Programmer\My Self\html-pdf
console.log(path.resolve("test")); // D:\Z_Programmer\My Self\html-pdf\test
console.log(path.resolve(__filename)); // D:\Z_Programmer\My Self\html-pdf\app.js
console.log(path.resolve(__dirname)) // D:\Z_Programmer\My Self\html-pdf
console.log(path.resolve("test", "index.html"))

// To join 

console.log(path.join("test", "index.html")); // for normalizing - test\index.html
console.log(path.join(__dirname + "/images"));