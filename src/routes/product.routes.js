const express = require('express');

const router = express.Router();
const productController = require('../controllers/product.controller');
  

router.get('/', productController.getProducts);

router.get('/:id',(req, res)=>{
  res.send(`Product with ID: ${req.params.id}`);
});

module.exports = router;