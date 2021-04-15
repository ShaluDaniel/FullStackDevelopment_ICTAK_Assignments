const express= require('express');
const authorRouter = express.Router();
const authorData=require('../model/authordata');
function router(nav){
    // var authors =[
    //     {
    //          Name:'Joseph Barbera',
    //          famous : 'Tom and Jerry',
    //          Country:'United States',
    //          img:"JBarbera.jpg"
    //     },
    
    //     {
    //         Name:'Khalid Hoseni',
    //         famous :'The Kite Runner',
    //         Country:'Afghanistan',
    //         img:"khalid.jpg"
    //     },
    //     {
    //         Name:'Bram Stoker',
    //         famous :'Dracula',
    //         Country:'Britain',
    //         img:"dracula.jpg"
    //     }
    // ]
    authorRouter.get('/',function(req,res){
        authorData.find().then(function(authors){
            res.render('author',{
                nav,
                authors,
                title:'author'
           });
        })
        
    });
    authorRouter.get('/:id',function(req,res){
        
        const id= req.params.id;
        authorData.findOne({_id: id}).then(function(singleAuthor){
        res.render('singleAuthor',{
             nav,
             title:'id',
             singleAuthor
        });
    })
    });
    return authorRouter;
}
module.exports=router;

