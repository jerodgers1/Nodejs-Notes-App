const lodash = require('lodash');
const yargs = require('yargs');
const notes = require('./Notes.js');

//yargs is a easier way of getting command line arguments
//command line should look like node app.js <add/list/read/remove> --title="anything" --body="anything"
var argv = yargs.argv;
var command = process.argv[2];

if(command === 'add'){
	var note = notes.addNote(argv.title, argv.body);
	if(note)
	{
		console.log(`${note.title} was added`);	
	}
	else{
		console.log("Note was note added because the title is already in use.");
	}

} else if (command === 'list'){
	var NoteList = notes.getAll();
	console.log(`Printing ${NoteList.length} note(s).`);
	NoteList.forEach((note) => {
		notes.logNote(note);
	});


} else if(command === 'remove'){
	notes.removeNote(argv.title) ?	console.log(`note was removed`) : console.log(`Note not found`)	
} else if(command === 'read'){
	var note = notes.getNote(argv.title)
	if(note)
	{
		console.log(`Title: ${note.title} \nBody: ${note.body}`);
	} else{
		console.log(`Note not found`);
	}
} else{
	console.log('Command not recognized');
}