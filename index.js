const express = require('express')
const movies = require('./routes/movies')
const { keys, auth } = require('./routes/keys')

const app = express()
const port = 5050

app.use(express.json())

app.use((req, res, next) => {
    auth(req.query.apiKey, res, next)
})

app.use('/keys', keys)

app.use('/movies', movies)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})