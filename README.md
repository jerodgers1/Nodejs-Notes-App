in the command prompt type
	"npm install" 
this will install all the dependencies

to run the program in the command prompt use the follow:

to add note to the list:
	node app.js add --title="title name" --body="body content"
	or 
	node app.js add --t="title name" -b="body content"

to remove a note from the list:
	node app.js remove --title="title name"
	or
	node app.js remove --t="title name"

to read all notes:
	node app.js list

to read one note:
	node app.js read --title="title name"
	or
	node app.js read --t="title name"


You can also use nodemon in place of node. 

use --help for a list of commands acceptable in the program.
use --version for the version of the program you are current using.