const events = require('express').Router()
const db = require('../models')
const { Event } = db

// FIND ALL Events
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll()
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC BAND
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { idEvents: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A BAND
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// UPDATE A BAND
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: {
                idEvents: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                idEvents: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} eveent(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = events