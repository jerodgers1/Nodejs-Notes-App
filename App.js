const lodash = require('lodash');
const yargs = require('yargs');
const notes = require('./Notes.js');

//yargs is a easier way of getting command line arguments
//command line should look like node app.js <add/list/read/remove> --title="anything" --body="anything"
var argv = yargs.argv;
var command - process.argv[2];
console.log('Command: ', command);

if(command === 'add'){
	notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
	notes.getAll();
} else if(command === 'remove'){
	notes.removeNote(argv.title)
} else if(command === 'read'){
	notes.getNote(argv.title);
} else{
	console.log('Command not recognized');
}