const { json } = require("express");
const SupplierPayment = require("../models/SupplierPayment");

//* Create new supplier payment 
const newSupplierPayment = async (req, res) => {
    const newSupplierPayment = new SupplierPayment({
        supplierName: req.body.supplierName,
        rawMaterial: req.body.rawMaterial,
        unitPrice: req.body.unitPrice,
        quantity: req.body.quantity,
        senderBankName: req.body.senderBankName,
        senderBankAccountNo: req.body.senderBankAccountNo,
        receiverBankName: req.body.receiverBankName,
        receiverBankBranch: req.body.receiverBankBranch,
        receiverBankAccountNo: req.body.receiverBankAccountNo,
        amount: req.body.amount,
        transactionDate: req.body.transactionDate,
        paymentReferenceNo: req.body.paymentReferenceNo
    });

    newSupplierPayment
        .save()
        .then(supplierPayment => res.status(200).json(supplierPayment))
        .catch(error => res.status(400).json({ error: error.message }));

};


//* all supplier payments
const allSupplierPayments = async (req, res) => {
    await SupplierPayment
        .find()
        .then(supplierPayments => res.status(200).json(supplierPayments))
        .catch(error => json.status(400).json({ error: error.message }));
};

//*
const getPaymentData = async (req, res) => {
    await SupplierPayment.aggregate()
        .group({
            _id: "$supplierName",
            Total: {
                $sum: "$amount"
            }
        })
        .sort({
            _id: 'asc'
        })
        .then(paymentData => res.json(paymentData))
        .catch(error => res.json({ error: error.message }));
};

const getPaymentDataBySupplier = async (req, res) => {
    await SupplierPayment
        .aggregate()
        .match(
            {
                supplierName: req.params.name
            }
        )
        .then(paymentData => res.status(200).json(paymentData))
        .catch(error => res.status(400).json({ error: error.message }))
};

//*Get recently added suppliers
const getRecentPayments = async (req, res) => {
    await SupplierPayment
        .find({}, { supplierName : 1, amount : 1, createdAt : 1, _id : 1, paymentReferenceNo:1 })
        .sort({ createdAt: "asc" })
        .limit(5)
        .then(payments => res.status(200).json(payments))
        .catch(error => res.status(400).json(error));
};

module.exports = {
    newSupplierPayment,
    allSupplierPayments,
    getPaymentData,
    getPaymentDataBySupplier,
    getRecentPayments
};