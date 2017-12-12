var addNote = (title, body) => {
	console.log(`Adding Note; title: ${title}\nAdding body: ${body}`);
}

var getAll = () => {
	console.log(`Getting all notes.`);
}

var removeNote = (title) => {
	console.log(`Removing Note: ${title}`);
}

var getNote = (title) => {
	console.log(`Getting Note: ${title}`);
}

module.exports = {
	addNote,
	getAll,
	removeNote,
	getNote,
};