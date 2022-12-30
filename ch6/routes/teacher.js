import express from 'express';
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Teachers home page")
})

router.post('/create', (req, res)=>{
    res.send('new teacher created')
})

router.put('/update', (req, res)=>{
    res.send('teacher updated')
})

router.delete('/delete', (req, res)=>{
    res.send("teacher deleted")
})

export default router