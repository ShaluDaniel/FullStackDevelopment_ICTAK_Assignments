const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://Shaludm:Daniel@9876@ictak.il4bv.mongodb.net/LibraryApp?retryWrites=true&w=majority');
const Schema= mongoose.Schema;

const authorSchema =new Schema({
    Name: String,
    Country: String,
    Book:String,
    image: String,

});

var authorData =mongoose.model('authorData',authorSchema);
module.exports=authorData;