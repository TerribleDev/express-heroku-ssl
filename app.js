const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use((req, res, next) => {
    const forwardedProto = req.headers["X-Forwarded-Proto"] || req.protocol
    console.log(forwardedProto)
    forwardedProto === 'https' ? next() : res.redirect('https://' + req.headers.host + req.url, 301)
})