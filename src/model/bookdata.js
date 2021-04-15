const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryApp');
const Schema= mongoose.Schema;

const BookSchema =new Schema({
    title: String,
    author: String,
    genre:String,
    image: String,

});

var BookData =mongoose.model('bookdata',BookSchema);
module.exports=BookData;