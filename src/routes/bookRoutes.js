const express= require('express');
const booksRouter = express.Router();
const bookData=require('../model/bookdata')
function router(nav){
// var books =[
//     {
//          title:'Tom and Jerry',
//          author:'Joseph Barbera',
//          genre:'Cartoon',
//          img:"tom.jpg"
//     },

//     {
//          title:'Harry Potter',
//          author:'J. K. Rowling',
//          genre:'Fantasy',
//          img:"Harry.jpg"

//     },
//     {
//          title:'Three men in a boat',
//          author:'Jerome K. Jerome',
//          genre:'Fiction',
//          img:"boat.jpg"

//     }
// ]


booksRouter.get('/',function(req,res){
     bookData.find().then(function(books){
     res.render("books",{
          nav,
          books
     });
})
    
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    bookData.findOne({_id: id}).then(function(book){
     res.render('book',{
          nav,
          title:'Library',
          book
          
     });
    })
   
});

return booksRouter;
}
module.exports =router;
