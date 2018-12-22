const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

// console.log(notes.pop());
// notes.push('My new note');

// console.log(notes.shift());
// notes.unshift('My first note');

// notes.splice(1, 0, 'This is the new second item')　// 開始インデックス, ←から削除する要素数

// notes[2] = 'This is now the new note 3';

// notes.forEach(function (item, index) {
//     console.log(index);
//     console.log(item);
// })

// for (let count = 2; count >= 0; count--) {
//     console.log(count);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count]);
// }

console.log(notes.length);
console.log(notes);

const index = notes.findIndex(function (note, index) {
    console.log(note);
    return note.title === 'Habbits to work on'
})

console.log(index);


