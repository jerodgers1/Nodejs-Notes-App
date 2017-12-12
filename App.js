//Loads Libraries

//Loads File
const Notes = require('./Notes.js');

var response = Notes.addNote();
console.log(response);

var product = Notes.add(2,3);
console.log(`2 plue 3 equals ${product}.`);
