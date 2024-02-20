const express=require('express');
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../Conrollers/productControllers');
const { authMiddleware } = require('../middleware/authMiddleware');
const router =express.Router();

router.post('/',addProduct);
router.get('/',getProducts);
router.put('/:prodId',updateProduct);
router.delete('/:prodId',deleteProduct)

module.exports = router;