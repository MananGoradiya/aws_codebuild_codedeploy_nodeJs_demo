const express = require('express')
const app = express()
//const port = process.env.PORT || 3000 ;
const port = process.env.PORT || 3000 ;
const config = require('config')
console.log(config);

app.get('/', (req, res) => {
  res.send('<h1>CICD Pipeline! Work in progress<h1>')
})

app.get('/status', (req, res) => {
    res.status(200).send('ok')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})