const express = require('express')
const app = express()
const PORT = 3000
app.get("/", (req, res)=>{
    res.send("this is homePage")
})
app.get("/about", (req, res)=>{
    //res.send("this is About")
    res.status(200).send("this is About Page")
})
app.get("/contact", (req, res)=>{
    res.send("this is Contact Page")
})
app.listen(PORT, ()=>{
    console.log(`listening to this ${PORT}`)
})