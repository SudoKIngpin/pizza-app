const express=require('express')

const app=express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const PORT=process.env.PORT||3300
const path=require('path')

app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    //res.send("Hello from server");
    res.render('home')

})


app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}....`)
})



