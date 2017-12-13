const fs = require('fs');
/*
	this whole file takes a obj converts it to a string
	then writes it to a file
	then reads the file
	converts the string to a obj and prints the type and the object title
*/

var originalNote = {
	title: 'some title',
	body: 'some body'
};
//converts object to string
var originalNoteString = JSON.stringify(originalNote);

//takes two arguments file name (use .json file extention, and the string)
fs.writeFileSync('../files/notes.json', originalNoteString);

//reads file
var noteString = fs.readFileSync('../files/notes.json');

//converts string to object
note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);