import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  fetch('http://date:3005/')
    .then(response => response.text())
    .then(date => {
      res.send(
        `Hello World! ` +
          `Я получил дату от date-service: ${date}`
      )
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
