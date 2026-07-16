const math = require('./math');
// const user = require('./user.json');
const log = require('./logger');  
const user = require('./user');
require('dotenv').config();

console.log(process.env.PORT);

log('application has started');

math.add(5, 3); // Output: 8

console.log(math.add(10, 20)); // Output: 30

console.log(user);