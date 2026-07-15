const log = require('./logger');
const { purchase } = require('./purchase');

log('Product module has been loaded');

purchase(123); // Output: Product with ID 123 has been purchased.