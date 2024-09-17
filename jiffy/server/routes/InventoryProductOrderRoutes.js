const express = require('express')
const {
    createProductOrder,
    getAllProductOrders,
    deleteProductOrder
} = require('../controllers/InventoryProductOrderController')

const router = express.Router()

// GET all product orders
router.get("/", getAllProductOrders);

// POST a new product order
router.post('/', createProductOrder);

// DELETE a particula product order
router.delete('/:id', deleteProductOrder);

module.exports = router