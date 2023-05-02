const http = require("https")

const req = http.request('https://www.google.com', (res) => {
  res.on('data', (chunk) => {     // res.on() ==> it is event emitter , where its called data
    console.log(chunk);
  })

  res.on('end', () => {
    console.log("No More Data");
  })
})

req.end()  // The End function we use because it will cause the request to be sent


// Common JS Module  ==> require()

const http = require("https")

// ECMASceipt / ES6 ==> impoert  

import { send } from './request.mjs'   // => Import Module

export {    // ==> Export Module
  send
}