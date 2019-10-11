// the express variable can be used to access methods and variables of the module
const express = require('express');

// call express function and assign it to app var
const app = express();

// root route
// call get method on  object, params : location param, require and request objects
app.get('/', (req, res) =>{
    res.sendFile('index.html', {root:__dirname});
});

//call use method on app object to set up static server for js and css files
app.use('/static', express.static('public'));

// call listen method on app object to setup dev server, pass in port number as param
app.listen(3001, () => {
    console.log ('the app is running on localhost: 3001!')
});
