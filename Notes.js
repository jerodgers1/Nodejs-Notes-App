const fs = require('fs');

var fetchNotes = () => {
	try{
		var notesString = fs.readFileSync('./files/notesData.json');
		//this will take the current notes in the file add them to the array 
		return JSON.parse(notesString);
	} catch (e){
		console.log(e);
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('./files/notesData.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	//stores dupilcates. the filter callback gets called for every note in the notes array
	var duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});
	//if no duplicates exist it will write to file
	if(duplicateNotes.length === 0)
	{
		//adds new notes to array
		notes.push(note);
		//writes all note to file
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	return fetchNotes();
};

var removeNote = (title) => {
	//gets the list of notes from the json file
	var notes = fetchNotes();
	//save notes that does not equal the title
	var filterNotes = notes.filter((notes) => {
		return notes.title !== title;
	});
	//saves notes after removal.
	saveNotes(filterNotes);
	return notes.length !== filterNotes.length;

};

var getNote = (title) => {
	var notes = fetchNotes();
	var filterNotes = notes.filter((notes) => {
		return notes.title === title;
	});

	return  filterNotes[0];
};

var logNote = (note) => {
	console.log(`------------------------------- \nTitle: ${note.title} \nBody: ${note.body}`);
}

module.exports = {
	addNote,
	getAll,
	removeNote,
	getNote,
	logNote,
};