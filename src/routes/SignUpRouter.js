const express= require('express');
const SignUpRouter = express.Router();


function router(nav){
    var admins =[
        {    Name:'Philip',
             email:'maretphilip@gmail.com',
             Password:'Welcome1234'
            
        },
    
        {    Name :'Shalu',
             title:'shalu.daniel98@gmail.com',
             author:'Hello12345'
             
    
        },
        
    ]
    

SignUpRouter.get('/',function(req,res){
    res.render("Signup",{
         nav,
         title:'SignUp',
         admins
         
    });
});
return SignUpRouter;
}
module.exports=router;