const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');


//set up an express app
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://eli:alpha4454@cluster0.sgdja.mongodb.net/cluster0?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => app.listen(3002))
    .catch((err) => console.log(err));


// register a view engine ejs
app.set('view engine', 'ejs');


//middleware and static files like images
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

//respond to that request
app.get('/', (req, res) => {
    res.redirect('/blogs')
   
});

app.get('/about', (req, res) => {
   // res.sendFile('./views/about.html', {root: __dirname});
    //res.send('<p>about page</p>');
    res.render('about', { title: 'About' });
});
//blog routes
app.use('/blogs', blogRoutes)

//404 page-- should always be at the bottom
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', { title: '404' });
});