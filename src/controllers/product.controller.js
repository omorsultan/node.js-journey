const productService = require("../services/product.service");

exports.getProducts = async (req, res) => {
    try {
        const { stock, sortBy, order, limit } = req.query;

        const products = await productService.getProducts({
            stock,
            sortBy,
            order,
            limit
        });

        res.status(200).json({
            success: true,
            data: products
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};