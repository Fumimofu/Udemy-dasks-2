const todos = ['study js', 'learn German', 'text Tobi', 'play with children', 'cook the dinner'];

todos.splice(2, 1);
todos.push('pick Max up');
todos.shift();

console.log(`You have ${todos.length} todos.`);

todos.forEach(function (todo, index) {
    const num = index + 1;
    console.log(`${num}. ${todo}`);
})

// for (let index = 0; index < todos.length; index++) {
//     const todo = todos[index];
//     const num = index + 1;
//     console.log(`${num}. ${todo}`);
// }
