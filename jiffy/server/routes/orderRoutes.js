const express = require('express')
const {
    createOrder,
    getAllOrders,
    getSingleOrder,
    getOrderByOrderId,
    getAllCustomerOrders,
    deleteOrder,
    updateOrder,
    updateOrderasdelivering,
    updateOrderascompleted,
    getPackagingOrders,
    getDeliveringOrders,
    orderByName,
    orderByAddress,
    getCountTotalDelivering,
    getCompletedgOrders,
    getCountTotalCompleted,

    updateOrderaspackaged,
    getPendingOrders
} = require('../controllers/orderController')


const router = express.Router()

//Get all orders
router.get('/', getAllOrders)

//get all orders of the customer

router.get('/:customerId', getAllCustomerOrders)


//Get order by order ID

router.get('/getorderbyid/:orderId', getOrderByOrderId)


//Get a single order
router.get('/getasingleorder/:id', getSingleOrder)



//------------------------------------------------------------ get orders by delivery status ----------------------------------------

//Get packaging orders
router.get('/deliveryStatus/packaging', getPackagingOrders)

//get completed order
router.get('/deliveryStatus/delivering',getDeliveringOrders)

//Get completed order
router.get('/deliveryStatus/completed',getCompletedgOrders)


//Get pending orders
router.get('/orderStatus/pending',getPendingOrders)

//---------------------------------------------------------------------------------------------------------------------------------



//Post a new order
router.post('/', createOrder)


//Delete an order
router.delete('/:id', deleteOrder)

//Update a new order
router.patch('/:id', updateOrder)

//update as delivering
router.patch('/delivering/:id', updateOrderasdelivering)

//update as delivering
router.patch('/completed/:id', updateOrderascompleted)



//update as packaged
router.patch('/packaged/:id', updateOrderaspackaged)





// ---------------------------------------------------------------------------------------------------

//search bar in deliverymanagerhome page
router.get('/search/name/:recName', orderByName)

router.get('/search/address/:address', orderByAddress)

// ---------------------------------------------------------------------------------------------------

//take the total count for packaged orders
router.get('/packaged/count', getPackagingOrders)

//take the total count for delivering orders
router.get('/delivering/count',getCountTotalDelivering)

//take the total count for delivery completed orders
router.get('/deliveryCompleted/count',getCountTotalCompleted)

module.exports = router