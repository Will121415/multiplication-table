const { createTable } = require('./helpers/createTable');
const argv = require('./config/yargs');
require('colors');

console.clear();


createTable(argv)
    .then(m => console.log(`\n${m} creada!`.brightGreen))
    .catch(err => console.log(err));