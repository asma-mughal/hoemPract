const express = require('express')
const app = express()
const PORT = 3000
app.get("/", (req, res)=>{
    res.write("<h1>This is my work</h1>")
    //res.send("<h1>this is homePage</h1>")
    res.send()
})
app.get("/about", (req, res)=>{
    //res.send("this is About")
    res.status(200).send("this is About Page")
})
app.get("/contact", (req, res)=>{
    //res.send("this is Contact Page")
    res.send({
        id:1,
        name:'Jahil'
    })
})
app.listen(PORT, ()=>{
    console.log(`listening to this ${PORT}`)
})