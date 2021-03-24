const express= require('express');
const authorRouter = express.Router();
function router(nav){
    var authors =[
        {
             Name:'Joseph Barbera',
             famous : 'Tom and Jerry',
             Country:'United States',
             img:"JBarbera.jpg"
        },
    
        {
            Name:'Khalid Hoseni',
            famous :'The Kite Runner',
            Country:'Afghanistan',
            img:"khalid.jpg"
        },
        {
            Name:'Bram Stoker',
            famous :'Dracula',
            Country:'Britain',
            img:"dracula.jpg"
        }
    ]
    authorRouter.get('/',function(req,res){
        res.render('author',{
             nav,
             authors,
             title:'author'
        });
    });
    authorRouter.get('/:id',function(req,res){
        const id= req.params.id
        res.render('singleAuthor',{
             nav,
             title:'id',
             singleAuthor:authors[id]
        });
    });
    return authorRouter;
}
module.exports=router;

