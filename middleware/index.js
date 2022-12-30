const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const reqFilter = require('./middleware')
const router = express.Router()

// app.use(reqFilter)
router.use(reqFilter)

app.get('/', (req,res)=>{
    res.send("Welcome to home page")
})

router.get('/users', (req, res)=>{
    res.send('weilcome to users page')
})

app.get('/about', (req,res)=>{
    res.send("Welcome to about page")
})

app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})

