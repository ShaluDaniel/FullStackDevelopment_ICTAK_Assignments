const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryApp');
const Schema= mongoose.Schema;

const authorSchema =new Schema({
    Name: String,
    Country: String,
    Book:String,
    image: String,

});

var authorData =mongoose.model('authorData',authorSchema);
module.exports=authorData;