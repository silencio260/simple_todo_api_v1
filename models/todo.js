var mongoose = require('mongoose')

var todoSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'name cannot be left out'
    },
    completed:{
        type: Boolean,
        default: false
    },

    created_date: {
        type: Date,
        default: Date.now
    }
})


var Todo = mongoose.model('Todo', todoSchema)


module.exports = Todo;