const lodash = require('lodash');
const yargs = require('yargs');
const notes = require('./Notes.js');

const titleOptions = {
		describe: 'Title for the note',
		demand: true,
		alias: 't'
	}
//yargs is a easier way of getting command line arguments
var argv = yargs
	.command('add', 'Add a new note', {
		title: titleOptions,
		body: {
			describe: 'Body of the note',
			demand: true,
			alias: 'b'
		}
	})
	.command('list', 'Displays all the notes')
	.command('read', 'Read one note by title', {
		title: titleOptions
	})
	.command('remove', 'Remove a note by the title', {
		title: titleOptions
	})
	.help()
	.argv;
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