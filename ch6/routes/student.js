import express from 'express';
const router = express.Router();
import {allStudent, deleteStudent} from '../controller/studentController.js'

router.get('/all', allStudent)

router.get('/deleted/:id', deleteStudent)


router.get('/delete/:id([0-9]{2})', (req, res)=>{
    res.send(`studnet ${req.params.id} has been deleted`)
})

router.get('/travel/:from-:to', (req, res)=>{
   const {from, to} = req.params
   res.send(`traveling from ${from} to ${to}`)
})

router.post('/create', (req, res)=>{
    res.send('new student created')
})

router.put('/update', (req, res)=>{
    res.send('student updated')
})

router.delete('/delete', (req, res)=>{
    res.send("student deleted")
})


export default router