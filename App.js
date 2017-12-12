const fileSystem = require('fs');
const OperatingSystem = require('os');

var UserInformation = OperatingSystem.userInfo();

fileSystem.appendFile('Greetings.txt', 'Hello ' + UserInformation.username + '!', function(err) {
	if(err) {
		console.log('Unable to append to file');
	}
});

//using template strings
fileSystem.appendFile('Greetings.txt', `Hello ${UserInformation.username}! From template string`, function(err) {
	if(err) {
		console.log('Unable to append to file');
	}
});