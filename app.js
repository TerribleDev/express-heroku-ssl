const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next) => {
    const forwardedProto = req.header("X-Forwarded-Proto") || req.protocol
    console.log(`Incoming Protocol: ${forwardedProto}`)
    forwardedProto === 'https' ? next() : res.redirect(301, 'https://' + req.headers.host + req.url)
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

