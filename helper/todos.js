var db = require('../models')

exports.getTodos = function(req, res){

    db.Todo.find()
    .then(function(todos){
        res.json(todos)
    })
    .catch(function(err){
        res.send('there was an error')
    })
}

exports.postTodo = function(req, res){

    db.Todo.create(req.body)
    .then(function(todo){
        res.json(todo)
    })
    .catch(function(err){
        res.send('there was an error '+ err)
    })
}

exports.updateTodo =  function(req, res){

    db.Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(function(updatedTodo){
        res.json(updatedTodo)
    })
    .catch(function(err){
        console.log('error ----- ' + err)

    })

}

exports.showTodo = function(req, res){

    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo)
    })
    .catch(function(err){
        res.send('there was and error /n' + err)
    })

}

exports.updateTodo = function(req, res){

    var Id = req.params.todoId;
    db.Todo.findOneAndUpdate({_id: Id}, req.body, {new:true})
    .then(function(foundTodo){
        res.json(foundTodo)
    })
    .catch(function(err){
        res.send('there was and error /n' + err)
    })

}

exports.deleteTodo = function(req, res){

    var Id = req.params.todoId;
    db.Todo.remove({_id: Id})
    .then(function(){
       res.json({message: 'deleted'})
    })
    .catch(function(err){
        res.send('there was and error /n' + err)
    })

}


module.exports = exports;