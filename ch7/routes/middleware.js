const middleware = ('/', (req,res,next)=>{
    if(!req.query.username == 'admin' && !req.query.password == 'admin'){
        res.send("Invalid data")
    } else if (req.query.username == 'admin' && req.query.password == 'admin'){
        next()
    } else {
        console.log("something went wrong")
    }
})

export default middleware