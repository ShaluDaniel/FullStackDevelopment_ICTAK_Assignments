const express= require('express');
const AuthorRouter = express.Router();
const authorData=require('../model/authordata')

function router(nav){
    

AuthorRouter.get('/',function(req,res){
    res.render("addAnAuthor",{
         nav,
         title:'Add author',
         
    });
});

AuthorRouter.post('/add',function(req,res){
    var item={
        Name: req.body.Name,
        Country: req.body.Country,
        Book: req.body.Book,
        image: req.body.image,
    }
    var author=authorData(item);
    author.save();//saving to the  database
    res.redirect('/books');
    
     });
return AuthorRouter;
}
module.exports=router;