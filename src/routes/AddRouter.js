const express= require('express');
const AddRouter = express.Router();
const BookData=require('../model/bookdata')

function router(nav){
    

AddRouter.get('/',function(req,res){
    res.render("AddAuthor",{
         nav,
         title:'Add author',
         
    });
});

AddRouter.post('/add',function(req,res){
    var item={
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        image: req.body.image,
    }
    var book=BookData(item);
    book.save();//saving to the  database
    res.redirect('/books');
    
     });
return AddRouter;
}
module.exports=router;