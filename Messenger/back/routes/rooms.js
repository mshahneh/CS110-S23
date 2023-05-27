const express = require('express');
const router = express.Router()
// TODO: add rest of the necassary imports


module.exports = router;

// temporary rooms
rooms = ["room1", "room CS110", "room3"]

//Get all the rooms
router.get('/all', (req, res) => {
    // TODO: you have to check the database to only return the rooms that the user is in
    res.send(rooms)
});


router.post('/create', (req, res) => {
    // TODO: write necassary codesn to Create a new room
});


router.post('/join', (req, res) => {
    // TODO: write necassary codes to join a new room
});

router.delete('/leave', (req, res) => {
    // TODO: write necassary codes to delete a room
});