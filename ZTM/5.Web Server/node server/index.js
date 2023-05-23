const http = require("http")

const PORT = 3000
// Both req, res object are streams

const friends = []

const server = http.createServer((req, res) => {

  const items = req.url.split("/")

  if (req.method === "POST" && items[1] === "friends") {

    req.on('data', (data) => {     // req is a reqdable steam
      const friend = data.toSring()  // data will be buffer when we came through stream, we make to string by using toString()
      friends.push(JSON.parse(friend))
    })

    req.pipe(res)  //  We pass the data came from req to response object to the client

  }

  if (items[1] === "/test") {

    // res.writeHead(200, {
    //   'Content-Type': 'application/json'
    // })

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    res.end(JSON.stringify({
      id: 1,
      text: "Hello From Server"
    }))
  } else if (req.url === "demo") {

  }

})

server.listen(PORT, () => {
  console.log(`Server Is Listent at ${PORT}`);
})

/**
 * Basically const server => It is a event emitter
 * 
 * server.on("request", (req,res)=>{
 * 
 * })
 */

/**
 * req.metohd === 'POST' --> Core API made
 */

/**
 * req => Readable Stream
 * 
 * res => Writeable Stream
 */