//https://getemoji.com

//Asynchronous Callback
setTimeout(() => {
  console.log("🐇");
}, 3000) // Wait 3000 mili second / 3 sec

//callback Function ... so in here seTimeout() function wait 3000 milisecond the call the console.log("🐇") function
//Callback Function - This is the fondation of Node

console.log('🐢');


//Not all async function form js file put to the event loop
//Node try distribute some async function to the os karnel
//Like - Netwok related async function done by os netwok module
//To thread pool make keep free
