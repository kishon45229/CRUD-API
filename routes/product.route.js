const Product = require("../models/product.model.js");
const {getAllProducts, getSingleProduct, insertProduct, editProduct, deleteProduct} = require("../controller/product.controller.js");
const express = require("express");
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.post('/', insertProduct);
router.put('/:id', editProduct);
router.delete('/:id', deleteProduct);

module.exports = router;