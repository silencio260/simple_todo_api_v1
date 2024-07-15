$(document).ready(function(){

    $.getJSON('/api/todos')
    .then(addTodo)

    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo()
        }
    })

    $('.list').on('click', 'span',function(){
        // $(this).parent().remove()
        var id = $(this).parent().data('id')
        var delUrl = '/api/todos/'+ id
        $.ajax({
            method: 'DELETE',
            url: delUrl
        })
        .then(function(data){
            // console.log('obj parent ' + $(this).parent().remove())  
           
        })
        .catch(function(err){
            console.log('error***** ', err)
        })
        
        $(this).parent().remove()

        // console.log(id)
    })

    $('.list').on('click', 'li',function(){

        var completed = $(this).data('completed')
 
        var id = $(this).parent().data('id')
        var Url = '/api/todos/'+ id
        var Data = {completed: !completed}
        
       
        $.ajax({
            method: 'PUT',
            url: Url,
            data: Data
        } )
        .then(function(data){
         
            todo.toggleClass('done')

        })

        // console.log(id)
    })


   
})


function addTodo(todos){

    todos.forEach(function(todo){

        putTodo(todo)

    })
}

function putTodo(todo){
 
    console.log(todo.name)
    var newTodo = $('<li>' + todo.name + ' <span>X</span> </li>')
    newTodo.data('id', todo._id)
    newTodo.data('completed', todo.completed)
    // console.log(todo._id)

    if(todo.completed){
       newTodo.addClass('done')
    }

    $(newTodo).addClass('task')
    $('.list').append(newTodo)
}

function createTodo(){

    var userIn = $('#todoInput').val()
    $.post('/api/todos', {name: userIn})
    .then(function(data){

        putTodo(data)

    })

    var userIn = $('#todoInput').val('')

}


