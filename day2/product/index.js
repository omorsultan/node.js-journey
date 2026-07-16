
require('dotenv').config();
const log = require('./logger');
const { purchase } = require('./purchase');



log('Product module has been loaded');

purchase(1); // Output: Product with ID 1 has been purchased.

const port = process.env.PORT ; 
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Product Module');
});
console.log(process.env.PORT);
console.log(process.env.DB_PASSWORD); 

app.listen(port, () => {
  log(`Product module server is running on http://localhost:${port}`);
});