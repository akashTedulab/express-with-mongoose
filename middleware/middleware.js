const reqFilter = (req, res, next) =>{
    if(!req.query.age){
        res.send("please provide age in url query")
    } else if (req.query.age < 18){
        res.send("You cannot Enter")
    } else {
        next()
    }
}

// const reqFilter = (req,res,next)=>{
//     if(!req.query.username && !req.query.password){
//         res.send('Please Provide username and password in the URL Query')
//     } else if(req.query.username == "admin" && req.query.password == "admin"){
//         next()
//     } else {
//        res.send("wrong credientials")
//     }
// }

module.exports = reqFilter