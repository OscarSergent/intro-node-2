import express from 'express'
import things from '../data/things.js'

const thingsRouter = express.Router()

thingsRouter.get('/things', (req, res) => {
    return res.json(things)
})

thingsRouter.get('/things/:thingID', (req, res) => {
    let thingID = req.params.thingID
    let thing = things.find(el => el.id == thingID)
    return res.json(thing)
})

thingsRouter.post('/things', (req, res) => {
    let newThing = {
        id : things.length+1,
        title : req.body.title,
        type : req.body.type
    }
    things.push(newThing)
    return res.status(201).json(things)
})

export default thingsRouter