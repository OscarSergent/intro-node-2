import express from 'express'
import 'dotenv/config'

const app = express()

const PORT = process.env.PORT

app.get('/', (request, response) => {
    return response.send(`Welcome to my API`)
})

app.get('/users', (req, res) => {
    return res.send(`Hello users`)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT} :)`))