// const todos = ['study js', 'learn German', 'text Tobi', 'play with children', 'cook the dinner'];

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

const todos = [{
    text: 'study JS',
    completed: true
}, {
    text: 'learn German',
    completed: false
}, {
    text: 'text Tobi',
    completed: false
}, {
    text: 'play with Children',
    completed: true
}, {
    text: 'cook the Dinner',
    completed: true
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    })
    if (index > -1) {
        todos.splice(index, 1);
    }
}

deleteTodo(todos, 'play with children');
console.log(todos);
