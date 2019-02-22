const express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var createTable = require('./routes/CreateTableandInsert');
var app = express();


createTable();
const {setLimit, getIndexPage} = require('./routes/index');

app.use(bodyParser.urlencoded({extended:false}));


// Set Static Path
app.use(express.static(path.join(__dirname,'public')))


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.get('/get', getIndexPage);

app.post('/get',setLimit);

    
app.listen(3000, function(){
    console.log('Server Started on Port 3000.');
})