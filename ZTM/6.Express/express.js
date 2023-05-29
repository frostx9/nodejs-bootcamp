// Crteating Middleware

app.use((req, res, next) = {
  console.log("Hello ");
  next()
})