// the express variable can be used to access methods and variables of the module
const express = require('express');

// call express function and assign it to app var
const app = express();

// call listen method on app var to setup server, pass in port number as param
app.listen(3001)