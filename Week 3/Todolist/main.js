function get_task() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    var task = document.getElementById('task').value;
 
    var todos = get_task();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_task();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_task();
 
    var list = '<ul>';
    for(var i=0; i<todos.length; i++) {
        list += '<li>' + todos[i] + '<button class="remove" id="' + i  + '"><img src="trash.png" style="height: 25px;width: 25px; padding-top: 1px;padding-left: 2px;"></button></li>';
    };
    list += '</ul>';
 
    document.getElementById('todos').innerHTML = list;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();