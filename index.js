import express, { urlencoded } from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT
app.use(cors())

app.use(express.json())
app.use(urlencoded({extended : false}))

const things = [
    {
        id : 1,
        title : 'truc',
        type : 'thing'    
    },
    {
        id : 2,
        title : 'machin',
        type : 'thinger',
    },
    {
        id : 3,
        title : 'bidule',
        type : 'thingest',
    }
]

app.get('/', (req, res) => {
    return res.send(`Welcome to my API`)
})

app.get('/things', (req, res) => {
    return res.json(things)
})

app.get('/things/:thingID', (req, res) => {
    let thingID = req.params.thingID
    let thing = things.find(el => el.id == thingID)
    return res.json(thing)
})

app.post('/things', (req, res) => {
    let newThing = {
        id : things.length+1,
        title : req.body.title,
        type : req.body.type
    }
    things.push(newThing)
    return res.json(things)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT} :)`))