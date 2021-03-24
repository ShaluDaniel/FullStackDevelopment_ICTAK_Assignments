const express= require('express');
const booksRouter = express.Router();
function router(nav){
var books =[
    {
         title:'Tom and Jerry',
         author:'Joseph Barbera',
         genre:'Cartoon',
         img:"tom.jpg"
    },

    {
         title:'Harry Potter',
         author:'J. K. Rowling',
         genre:'Fantasy',
         img:"Harry.jpg"

    },
    {
         title:'Three men in a boat',
         author:'Jerome K. Jerome',
         genre:'Fiction',
         img:"boat.jpg"

    }
]


booksRouter.get('/',function(req,res){
    res.render("books",{
         nav,
         books
    });
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('book',{
         nav,
         title:'Library',
         book:books[id]
         
    });
});

return booksRouter;
}
module.exports =router;
