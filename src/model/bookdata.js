const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://Shaludm:Daniel@9876@ictak.il4bv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema= mongoose.Schema;

const BookSchema =new Schema({
    title: String,
    author: String,
    genre:String,
    image: String,

});

var BookData =mongoose.model('bookdata',BookSchema);
module.exports=BookData;