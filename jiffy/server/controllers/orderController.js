const Order = require('../models/Order')
const mongoose = require('mongoose')

//Get all orders
const getAllOrders = async (req, res) => {
    const orders = await Order.find({}).sort({ createdAt: -1 })

    res.status(200).json(orders)
}

//get all orders of the customer

const getAllCustomerOrders = async (req, res) => {
    const order = await Order.find({ customerId: req.params.customerId });
    res.status(200).json(order)
}

//Get order by order ID

const getOrderByOrderId = async (req, res) => {
    const order = await Order.find({ orderId: req.params.orderId });
    res.status(200).json(order)

}



//Get a single order
const getSingleOrder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such order' })
    }

    const singleOrder = await Order.findById(id)
    if (!singleOrder) {
        return res.status(404).json({ error: 'No such order' })
    }

    res.status(200).json(singleOrder)
}



//Create new order
const createOrder = async (req, res) => {
    const order = new Order({

       
        CustomerID:req.body.cus_id,
        Status:req.body.status,
   
        DelevaryStatus :req.body.delevary_status,
        Reciever_Name:req.body.recieverName,
        Shpiing_Address: req.body.address,
        Phone : req.body.phoneNumber,
        
    });
    await order.save();
    res.send(order);
}




//Delete an order
const deleteOrder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such order' })
    }

    const order = await Order.findOneAndDelete({ _id: id })

    if (!order) {
        return res.status(400).json({ error: 'No such order' })
    }

    res.status(200).json(order)

}

//Update an order
const updateOrder = async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();
        order.deliveryStatus = "Delivered";

        const updatedOrder = await order.save();

        res.json(updatedOrder);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }


}


//Update order as delivering
const updateOrderasdelivering = async (req, res) => {
    updateStatus = {
        DelevaryStatus: req.body.DelevaryStatus,
    };

    await Order.findOneAndUpdate({ _id: req.params.id }, updateStatus, {
        new: true,
    })
        .then((order) => res.status(200).json(order))
        .catch((err) => res.status(400).send(err));
};


//update order as completed
const updateOrderascompleted = async (req, res) => {
    updateStatus = {
        DelevaryStatus: req.body.DelevaryStatus,
    };

    await Order.findOneAndUpdate({ _id: req.params.id }, updateStatus, {
        new: true,
    })
        .then((order) => res.status(200).json(order))
        .catch((err) => res.status(400).send(err));
};



//update order as packaged
const updateOrderaspackaged = async (req, res) => {
    updateStatus = {
        Status: req.body.Status,
    };

    await Order.findOneAndUpdate({ _id: req.params.id }, updateStatus, {
        new: true,
    })
        .then((order) => res.status(200).json(order))
        .catch((err) => res.status(400).send(err));
};





//---------------------------------------------------------------- get orders by delivery status --------------------------------

//get only packaged orders
const getPackagingOrders = async (req, res) => {
    Order
    // .find({$or: [ { DelevaryStatus: "Completed" }, { DelevaryStatus: "Delivering" }]})
    .find({Status: "Packaged"})
    .then(orders=>{res.status(200).json(orders)});
}

//get only delivering orders
const getDeliveringOrders = async (req, res) => {
    Order
    .find( {DelevaryStatus: "Delivering"} )
    .then(orders=>{res.status(200).json(orders)});
}

//get only completed order
const getCompletedgOrders = async (req, res) => {
    Order
    .find( {DelevaryStatus: "Completed"} )
    .then(orders=>{res.status(200).json(orders)});
}


//get only pending orders
const getPendingOrders = async (req, res) => {
    Order
    .find( {Status: "Pending"} )
    .then(orders=>{res.status(200).json(orders)});
}



// --------------------------------end get orders by delivery status ------------------------------------------------




//--------------------------------------------------------search bar deliverymanager home page-------------------------

//search by customer_name
const orderByName = async (req, res) => {
    Order.find({ Reciever_Name: { $regex: req.params.recName + ".*", $options : 'i' } }).then(
        (delivery) => {
            res.json(delivery);
        }
    );
};

//search by address
const orderByAddress = async (req, res) => {
    Order.find({ Shpiing_Address: { $regex: req.params.address + ".*", $options : 'i' } }).then(
        (delivery) => {
            res.json(delivery);
        }
    );
};

//-----------------------------------------------------------------------------------------------------------------------


//take the count for delivering
const getCountTotalDelivering = async(req, res) =>{
    await Order
    .aggregate()
    .match({DelevaryStatus : "Delivering"})
    .count("DelevaryStatus")
    
    .then(count => {res.json({count})})
    .catch(error => {res.json({error:error})})
}

//take the count for completed
const getCountTotalCompleted = async(req,res) =>{
    await order
    .aggregate()
    .match({DelevaryStatus : "Completed"})
    .count("DelevaryStatus")
    
    .then(count => {res.json({count})})
    .catch(error => {res.json({error:error})})

}


//----------------------------------------------------------------------------------------------------------------------

module.exports = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    deleteOrder,
    updateOrder,
    getAllCustomerOrders,
    getOrderByOrderId,
    updateOrderasdelivering,
    updateOrderascompleted,
    getPackagingOrders,
    orderByName,
    orderByAddress,
    getCountTotalDelivering,
    getDeliveringOrders,
    getCompletedgOrders,
    getCountTotalCompleted,


    updateOrderaspackaged,
    getPendingOrders
}