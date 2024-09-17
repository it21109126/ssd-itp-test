const User = require('../models/User')
const income =require('../models/incomeHistory')
const mongoose = require('mongoose')


const insert = async (req, res) => {
    const history = new income({
        
        Order_id:req.body.order_ID,
        total_Amount:req.body.total, 
      
      
    });

    await history.save();
    
    res.send(history);
};



module.exports = { 
    insert,
    
}