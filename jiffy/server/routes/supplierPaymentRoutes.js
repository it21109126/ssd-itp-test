const express = require("express");

const {newSupplierPayment, allSupplierPayments, getPaymentData, getPaymentDataBySupplier, getRecentPayments} = require("../controllers/supplierPaymentController");

const router = express.Router();

//*Add new supplier payment 
router.post("/", newSupplierPayment);

//*Get all supplier payments 
router.get("/", allSupplierPayments);

//*Get all supplier payments 
router.get("/payment-data", getPaymentData);

//*Get Payment data by name
router.get("/payment-data/:name", getPaymentDataBySupplier);

//*Get Payment data by name
router.get("/recent-data", getRecentPayments);

module.exports = router;