const homeController = require("../app/http/controllers/homeController")

const authController=require('../app/http/controllers/authController')

const cartController=require('../app/http/controllers/customers/cartController')

function initRoutes(app)

{

    
    app.get('/',homeController().index)


        //(req,res)=>{    // defining routes 
      //res.render("home")
    //


    app.get('/cart',cartController().index)
    
    
    
    app.get('/login',authController().login)
    
    
    app.get('/register',authController().register)
    
    app.post("/update-cart",cartController().update)
    
}

module.exports = initRoutes