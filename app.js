const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    var user = JSON.parse(req.body)
    res.send('user info is ' + JSON.stringify(user))
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})