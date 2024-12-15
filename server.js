const express=require('express')
const ejs=require('ejs') ///template engine

const expressLayout=require('express-ejs-layouts')
//use for avoid repetition and make a layout 
//dynamic code of diff. pages  wil be injected in layout.ejs file 

const app=express() // express pbject

const path=require('path') 

const PORT=process.env.PORT || 3000 //PORT environment variable






//Assests 

app.use(express.static('public'));


// set template engine 
app.use(expressLayout)

app.set('views',path.join(__dirname,"/resources/views"))
app.set("view engine",'ejs')




app.get('/cart',(req,res)=>{    // defining routes 
    res.render("customers/cart")

})


app.get('/',(req,res)=>{    // defining routes 
    res.render("home")
})


app.get('/login',(req,res)=>{    // defining routes 
    res.render("auth/login")
})

app.get('/register',(req,res)=>{    // defining routes 
    res.render("auth/register")
})





app.listen(PORT,()=>{ 
    console.log(`Listening on port ${PORT} `)
})

