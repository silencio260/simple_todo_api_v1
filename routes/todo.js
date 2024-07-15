var express = require('express'),
    router = express.Router(),
    db = require('../models'),
    helper = require('../helper/todos')


router.route('/')
  .get(helper.getTodos )
  .post(helper.postTodo)

router.route('/:todoId')
    .get(helper.showTodo )
    .put( helper.updateTodo )
    .delete(helper.deleteTodo )

// router.delete('/deleteall', function(req, res){
//     db.Todo.findAndDelete
// })

module.exports = router;
