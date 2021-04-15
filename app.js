const express= require('express');
const app= express();
const port=process.env.PORT || 5000
const nav=[
     {
          link:'/books',name:'Books'
     },
     {
          link:'/Signup',name:'Sign Up'
     },
     {
          link:'/author',name:'Authors'
     },
     {
          link:'/login', name:'Login'
     },
     {
          link:'/AddAuthor', name:'Add  Book'
     },
     {
          link:'/addAnAuthor', name:'Add Author '
     }
]
const booksRouter=require('./src/routes/bookRoutes')(nav)
const loginRouter=require('./src/routes/loginRouter')(nav)
const authorRouter=require('./src/routes/authorRoute')(nav)
const SignUpRouter=require('./src/routes/SignUpRouter')(nav)
const AddRouter=require('./src/routes/AddRouter')(nav)
const AuthorRouter=require('./src/routes/AuthorRouter')(nav)

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use('/books', booksRouter);
app.use('/login', loginRouter);
app.use('/author', authorRouter);
app.use('/Signup', SignUpRouter);
app.use('/AddAuthor', AddRouter);
app.use('/addAnAuthor', AuthorRouter);



app.get('/',function(req,res){
     res.render("index",{
          nav,
          title:'Library'
     });
});


app.listen(port,()=>{console.log("Server ready at" + port)});

// const { body, validationResult } = require('express-validator');

// app.post(
//   '/user',
//   // username must be an email
//   body('username').isEmail(),
//   // password must be at least 8 chars long
//   body('password').isLength({ min: 8 }),
//   (req, res) => {
//     // Finds the validation errors in this request and wraps them in an object with handy functions
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     User.create({
//       username: req.body.username,
//       password: req.body.password,
//     }).then(user => res.json(user));
//   },
// );



