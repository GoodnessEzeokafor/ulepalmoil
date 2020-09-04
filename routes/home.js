const router = require("express").Router()


const request= require("request")

router.get('/', (req,res)=>{
    res.render("Home.ejs")
})


router.get('/about', (req,res)=>{
    res.render("About.ejs")
})

router.get('/contact', (req,res)=>{
    res.render("Contact.ejs")
})

router.post("/newsletter", async(req, res) => {
    const {email} = req.body
    
    const data = {
        members:[
          {
            email_address:req.body.email,
            status:"subscribed",
            // merge_fields:{
            //     FNAME:username,
            // }
          }
        ]
      }
      const postData = JSON.stringify(data) 
      const options = {
        url :"https://us19.api.mailchimp.com/3.0/lists/02e1d16e87",
        method:'POST',
        headers:{
          Authorization:"auth API_KEY"
        },
        body:postData
      };
  
      request(options, (err, response,body)=>{
        if(err){
          console.log("MAILCHIMP: ERROR", err)
        } else{
          if(response.statusCode === 200){
            console.log("SUCCESS")
          } else {
            console.log("FAILED")
          }
        }
      })
      
})

// router.get('/', (req,res)=>{
//     res.render("Home.ejs")
// })

module.exports = router