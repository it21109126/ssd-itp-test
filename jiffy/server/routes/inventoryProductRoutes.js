const express = require('express')
const {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts,

} = require('../controllers/inventoryProductsController')

const router = express.Router()


// GET a single product by id
router.get('/:id', getProduct)

// GET all products
router.get("/", getAllProducts);

// POST a new product
router.post('/', createProduct)

// DELETE a product
router.delete('/:id', deleteProduct)

// UPDATE a product
router.patch('/:id', updateProduct)


module.exports = router