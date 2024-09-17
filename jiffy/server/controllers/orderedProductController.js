
const mongoose = require('mongoose')

const orderedProducts= require('../models/orderedProduct');


const Create = async (req, res) => {
    const orderedProduct = new orderedProducts({
        OrderID: req.body.order_ID,
        ProductID : req.body.product_id,
        Quantity: req.body.quantity
    });

    await orderedProduct.save();
    res.send(orderedProduct);
};


module.exports = {
    Create,
}
