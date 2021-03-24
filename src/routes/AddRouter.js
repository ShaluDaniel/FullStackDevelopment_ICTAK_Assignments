const express= require('express');
const AddRouter = express.Router();

function router(nav){
    

AddRouter.get('/',function(req,res){
    res.render("AddAuthor",{
         nav,
         title:'Add author',
         
    });
});
return AddRouter;
}
module.exports=router;