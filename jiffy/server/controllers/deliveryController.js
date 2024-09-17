// const Delivery = require("../models/Delivery");


// //* create new delivery
// const newDelivery = async (req, res) => {

//     const newDelivery = {
//         orderId: req.body.orderId,
//         customerUserName: req.body.customerUserName,
//         deliveryAddress: req.body.deliveryAddress,
//         deliveryDate: req.body.deliveryDate,
//         deliveryStatus: req.body.deliveryStatus,
//         deliveryFeedbacks: req.body.deliveryFeedbacks,
//     };

//     try {
//         const delivery = await Delivery.create(newDelivery);
//         res.status(200).json(delivery);
//     } catch (err) {
//         res.status(400).json({ err: err.message });
//     }
// };


// //* get all deliveries
// const allDeliverys = async (req, res) => {
//     await Delivery.find()
//         .then((deliverys) => res.status(200).json(deliverys));
// };



// //* find a delivery by id
// const deliveryById = async (req, res) => {
//     Delivery.findById(req.params.id).then((delivery) => {
//         res.json(delivery);
//     });
// };



// //* find a delivery by name
// const deliveryByName = async (req, res) => {
//     Delivery.find({ companyName: { $regex: req.params.comName + ".*" } }).then(
//         (delivery) => {
//             res.json(delivery);
//         }
//     );
// };



// //* update a delivery
// // var updateDelivery = async (req, res) => {
// //     updateDelivery = {
// //         orderId: req.body.orderId,
// //         customerUserName: req.body.customerUserName,
// //         deliveryAddress: req.body.deliveryAddress,
// //         deliveryDate: req.body.deliveryDate,
// //         deliveryStatus: req.body.deliveryStatus,
// //         deliveryFeedbacks: req.body.deliveryFeedbacks
// //     };


// //     await Delivery.findOneAndUpdate({ _id: req.params.id }, updateDelivery, {
// //         new: true,
// //     })
// //         .then((delivery) => res.status(200).json(delivery))
// //         .catch((err) => res.status(400).send(err));
// // };





// //update status
// var updateStatus = async (req, res) => {
//     updateStatus = {
//         deliveryStatus: req.body.deliveryStatus,
//     };


//     await Delivery.findOneAndUpdate({ _id: req.params.id }, updateStatus, {
//         new: true,
//     })
//         .then((delivery) => res.status(200).json(delivery))
//         .catch((err) => res.status(400).send(err));
// };






// //*delete delivery
// const deleteDelivery = async (req, res) => {
//     await Delivery.findById(req.params.id)
//         .then((delivery) => delivery.remove().then(res.json({ success: true })))
//         .catch((err) => res.status(404).json({ success: false }));
// };









// //add new feedback
// var newFeedback = async (req, res) => {
//     newFeedback = {
//         deliveryFeedbacks: req.body.deliveryFeedbacks
//     };


//     await Delivery.findOneAndUpdate({ _id: req.params.id }, newFeedback, {
//         new: true,
//     })
//         .then((delivery) => res.status(200).json(delivery))
//         .catch((err) => res.status(400).send(err));
// };














// //* find a supplier by companyName

// const diliveryById = async (req, res) => {
// console.log(req.params.id)
//     Delivery

//         .find({ orderId: { $regex: ".*" + req.params.id + ".*", $options: 'i' } })

//         .then(delivery => { res.status(200).json(delivery) })

//         .catch(error => res.status(400).json({ error: error.message }))

// };





// module.exports = {
//     newDelivery,
//     allDeliverys,
//     deliveryById,
//     deliveryByName,
//     // updateDelivery,
//     updateStatus,

//     newFeedback,

//     deleteDelivery,


//     diliveryById
// }