const express = require('express')
const multer = require('./multer')
const app = express()
const PORT = process.env.PORT || 3001
const EventEmitter = require('events')
const event = new EventEmitter()
let count = 0;

event.on("ApiCalled", ()=>{
    count++;
    console.log("Event Called", count)
})

app.post('/upload', multer ,(req, res)=>{
    res.send("Upload done")
    event.emit("ApiCalled")
})

app.get('/', (req, res)=>{
    res.send("EventEmitter")
    event.emit("ApiCalled")
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})