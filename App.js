//Loads Libraries

//third party modules
const lodash = require('lodash');

console.log(`lodash returns true if a boolean variable is a string other wise it returns false. \nResult is ${lodash.isString(true)}`);

console.log(`lodash returns true if "hello" is a string other wise it returns false. \nResult is ${lodash.isString("hello")}`);

var filteredArray = lodash.uniq(['James', 1, 'James', 1, 2, 3, 3, 4])
console.log(`this array ['James', 1, 'James', 1, 2, 3, 3, 4] is filtered using lodash to remove duplicate variables. \nSo the new array is [${filteredArray}]`);