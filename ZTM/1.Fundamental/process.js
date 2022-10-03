// const mission = "learn"
const mission = process.argv[2] // for use process object...[0] - ise node ....[1] - js file name....[2] - additional cli
/*
node      process.js        learn
[0]          [1]              [2]  
*/

if (mission === 'learn') {
  console.log('Time to start');
} else {
  console.log("Wait fot instruction");
}

//Node has global object...like b8 engine has window object
// we dont need to call global object
console.log("Hello"); // this function called from global scope
global.console.log("There !!")

// Global Obejct