var express = require('express'),
    app = express(),
    todo = require('./routes/todo'),
    bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extented: true}))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))


app.get('/', function(req, res){

    res.sendfile('index.html')
})


app.use('/api/todos', todo)

app.listen(3000, function(){

    console.log("app is running")
})