const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SupplierPaymentSchema = new Schema({
    supplierName: {
        type: String,
        required: true
    },
    rawMaterial: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    senderBankName: {
        type: String,
        required: true
    },
    senderBankAccountNo: {
        type: String,
        required: true
    },
    receiverBankName: {
        type: String,
        required: true
    },
    receiverBankBranch: {
        type: String,
        required: true
    },
    receiverBankAccountNo: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
    ,
    transactionDate: {
        type: Date,
        required: true
    },
    paymentReferenceNo: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
);

const SupplierPayment = mongoose.model("SupplierPayment", SupplierPaymentSchema);

module.exports = SupplierPayment;