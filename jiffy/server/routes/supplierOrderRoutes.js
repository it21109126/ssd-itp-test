const express = require('express')
const{
    createSupplierOrder,
    getAllSupplierOrders,
    deleteSupplierOrder,
    updateSupplierOrder,


} = require('../controllers/supplierOrderController')

const router = express.Router()

//Get all orders
router.get('/', getAllSupplierOrders)


//Post a new order
router.post('/', createSupplierOrder)

//Delete an order
router.delete('/:id', deleteSupplierOrder)

//Update a new order
router.patch('/:id', updateSupplierOrder)


module.exports = router