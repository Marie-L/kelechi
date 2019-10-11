// the express variable can be used to access methods and variables of the module
const express = require('express');

// call express function and assign it to app var
const app = express();

// call router method on express object and pass to router var
//const router = express.Router();

// root endpoint
// call get method on  object, params : location param, require and request objects
app.get('/', (req, res) =>{
    res.sendFile('index.html', {root:__dirname});
});

// about endpoint
app.get('/about', (req,res) => {
    res.sendFile( __dirname +'/about.html')
});

// work endpoint
app.get('/work', (req,res) => {
    res.sendFile( __dirname +'/work.html')
});


// about endpoint
app.get('/contact', (req,res) => {
    res.sendFile( __dirname +'/contact.html')
});

// about endpoint
app.get('/blog', (req,res) => {
    res.sendFile( __dirname +'/blog.html')
});


//call use method on app object to set up static server for js and css files
app.use('/static', express.static('public'));

// call listen method on app object to setup dev server, pass in port number as param
app.listen(3001, () => {
    console.log ('the app is running on localhost: 3001!')
});
