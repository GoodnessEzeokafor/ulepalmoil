const router = require("express").Router()



router.get('/', (req,res)=>{
    res.render("Home.ejs")
})


module.exports = router