const Products = require("../models/product.model.js");

const getAllProducts = async (req, res) => {
    try {
        const products = await Products.find({});
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findById(id);
        if (!product) return res.status(404).json({ message: "Product not found!!" });
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const insertProduct = async (req, res) => {
    try {
        const Product = await Products.create(req.body);
        res.status(200).json(Product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findByIdAndUpdate(id, req.body);
        if (!product) return res.status(404).json({ message: "Product not found!!" });

        const productUpdate = await Products.findById(id);
        res.status(200).json(productUpdate);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findByIdAndDelete(id);
        if (!product) return res.status(404).json({ message: "Product not found!!" });

        res.status(200).json({ message: "Product deleted successfully!!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    getSingleProduct,
    insertProduct,
    editProduct,
    deleteProduct
};