import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


function OrderDetails(props) {

    const { id } = useParams();

    const [CustomerID, setCustomerID] = useState('')
    const [Status, setStatus] = useState('')
    const [Date, setDate] = useState('')

    const [orderId, setorderId] = useState(id)
    const [deliveryFeedback, setdeliveryFeedback] = useState('')
    const [rating, setrating] = useState(0)
    const [name, setname] = useState('')

    //var customer = null
    const [order, setOrder] = useState(
        {
            CustomerID: "",
            Status: "",
            Date: "",
            __v: 0,
            _id: "",
            deliveryId: ""
        })

    useEffect(() => {
        const fetchOrder = async () => {
            // fetch(`/api/users/${id}`)
            // .then(res => res.json)
            // .then(data => setCustomer(data))
            const response = await fetch(`/api/orders/getasingleorder/${id}`)
            const json = await response.json()
            //console.log(json["name"])
            if (response.ok) {
                //console.log("json "+json["name"])
                setOrder(
                    {
                        CustomerID: `${json["CustomerID"]}`,
                        Status: `${json["Status"]}`,
                        Date: `${json["Date"]}`,
                        __v: 0,
                        _id: `${json["_id"]}`,
                        deliveryId: `${json["deliveryId"]}`
                    })
                setCustomerID(json["CustomerID"])
                setStatus(json["Status"])
                setDate(json["Date"])
            } else {
                console.log("not ok")
            }

        }

        fetchOrder()

    }, [setOrder])



    const navigate = useNavigate();

    //disable enter feedbacks until order completed
    const [isDisable, setisDisable] = useState(true);


    const [deliveryFeedbacks, setDeliveryFeedbacks] = useState(
        ""
    );


    const [deliveryStatus, setDeliveryStatus] = useState(order.CustomerID);



    //changing the progress bar
    const [precentage, setPrecentage] = useState(0)



    //================================================================================================================================================ 
    const [message, setMessage] = useState();
    const { oId } = useParams();
    console.log(oId);


    useEffect(() => {
        const fetchDeliveryFeedback = async () => {
            const response = await fetch(`/api/users/feedbacks/${id}`);
            const json = await response.json()
            //console.log(json["name"])
            if (response.ok) {
                //console.log("json " + json["orderId"])
                setMessage(json.deliveryFeedback)
            } else {
                console.log("not ok")
            }

        }

        fetchDeliveryFeedback()

    }, [])

    //================================================================================================================================================ 
    const [error, setError] = useState(null);




    const progressbar = order["Status"];
    const progressbarfixvalue = "Completed";


    useEffect(() => {


        if (progressbar === progressbarfixvalue) {


            setDeliveryFeedbacks(order.DeliveryFeedback);
            setDeliveryStatus(order.deliveryStatus);
            setisDisable(false);
            setPrecentage(100);

        } else if (progressbar === "Delivering") {

            setPrecentage(75);
        } else {
            setPrecentage(0);

        }




    }, [order.deliveryStatus, order.deliveryStatus, progressbar]);

    const delivery = {
        deliveryFeedbacks,
    };



    //Insert Feedback
    const handleFeedbackUpdate = async (e) => {
        e.preventDefault();

        const feed = { orderId, name, deliveryFeedback, rating }

        const response = await fetch(`/api/users/feedbacks/${orderId}`, {
            method: 'POST',
            body: JSON.stringify(feed),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            alert("Insert failed please try again." + error);
            // + Status + orderId + name + deliveryFeedback + rating
        }

        if (response.ok) {
            setorderId('')
            setdeliveryFeedback('')
            setname('')
            setrating('')
            setError(null)

            if (
                !window.confirm(
                    "Supplier details updated successfully. Do you want to do more changes?"
                )
            ) {
                navigate("/suppliers");
            }
        }
    };



    // //update as completed by user
    // const handlestatus = async (e) => {
    //     e.preventDefault();

    //     const response = await fetch(`/api/users/feedbacks/deliveryStatus/${id}`, {
    //         method: "PATCH",
    //         body: JSON.stringify({ DelevaryStatus: "Completed" }),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });

    //     const json = await response.json();

    //     if (!response.ok) {
    //         setError(json.error);
    //         alert("failed please try again." + error);
    //     }

    //     if (response.ok) {
    //         setDeliveryFeedbacks(json.deliveryFeedbacks);
    //         setError(null);

    //         if (
    //             !window.confirm(
    //                 "Congrats! You recived the order"
    //             )
    //         ) {
    //             // navigate("/");
    //         }
    //     }
    // };


    //* Update the Completed status
    async function handlestatus() {
        const response = await fetch(`/api/users/feedbacks/deliveryStatus/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ DelevaryStatus: "Completed" }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (!response.ok) {
            alert("Update failed please try again.");
        }

        if (response.ok) {
            alert(
                "delivery status update as Completed for Delivery ID : " + orderId
            );
            window.location.reload();
        }
    }





    // //* Delete deliver records
    // const handleDeletedeliveryrecode = async () => {
    //     if (window.confirm("Do you want to delete this delivery records?")) {
    //         const response = await fetch(`/api/users/feedbacks/${id}`, {
    //             method: "DELETE",
    //         });

    //         const json = await response.json;

    //         if (response.ok) {
    //             alert("Successfully Deleted the delivery records");
    //             window.location.reload();
    //         }

    //         if (!response.ok) {
    //             setError(json.error);
    //             alert("Failed to remove the delivery records." + error);
    //             window.location.reload();
    //         }
    //     }
    // };


    //delete feedback    original correct---------------------------------------------------------
    const handleFeedbackdelete = async (e) => {
        e.preventDefault();

        if (window.confirm("Do you want to delete this delivery Feedback?")) {

            const response = await fetch(`/api/users/feedbacks/${id}`, {
                method: "DELETE",
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
                alert("delete failed please try again." + error);
            }

            if (response.ok) {
                setDeliveryFeedbacks(json.deliveryFeedbacks);
                setError(null);

                if (
                    !window.confirm(
                        "Feedback deleted successfully"
                    )
                ) {
                    // navigate("/");
                }
            }

        }

    };




    //* Reset the form
    const handleReset = () => {
        setdeliveryFeedback("");
        setname("");
        setrating("")
    };



    //rating system

    // const [rating, setrating] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);

    const handleText = () => {
        switch (rating || hoverStar) {
            case 0:
                return "Evaluate";
            case 1:
                return "Dissatifation";
            case 2:
                return "Unsatisfied";
            case 3:
                return "Normal";
            case 4:
                return "Satisfied";
            case 5:
                return "Very Satisfied";
            default:
                return "Evaluate";
        }
    };

    const handlePlaceHolder = () => {
        switch (rating || hoverStar) {
            case 0:
                return "Comment here...";
            case 1:
            case 2:
            case 3:
            case 4:
                return "What is your problem?";
            case 5:
                return "Why do you like the product?";
            default:
                return "Comment here...";
        }
    };


    return (
        <div class="liton__wishlist-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        {/* <!-- PRODUCT TAB AREA START --> */}
                        <div class="ltn__product-tab-area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="ltn__tab-menu-list mb-50">
                                            <div class="nav">
                                                <a class="active show" data-toggle="tab" href="#liton_tab_1_1">Overview</a>
                                                <a data-toggle="tab" href="#liton_tab_1_2">Tracking Info</a>
                                                <a data-toggle="tab" href="#liton_tab_1_3">Feedback</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="tab-content">
                                            <div class="tab-pane fade active show" id="liton_tab_1_1">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <div class="row">
                                                        <div class="col-md-6 col-12 learts-mb-30">
                                                            <h4>Order ID <small>{id}</small></h4>
                                                            <h4>Customer ID <small>{CustomerID}</small></h4>
                                                            <h4>Status <small>{Status}</small></h4>
                                                            <h4>Date <small>{Date}</small></h4>
                                                            {/* <address>
                                                                <p><strong>Alex Tuntuni</strong></p>
                                                                <p>1355 Market St, Suite 900 <br />
                                                                    San Francisco, CA 94103</p>
                                                                <p>Mobile: (123) 456-7890</p>
                                                            </address> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <div class="table-responsive">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product ID</th>
                                                                    <th>Name</th>
                                                                    <th>Price</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {/* {customerOrders.map((order) => (
                                                                    <tr key={order._id}>
                                                                        <td>{order._id}</td>
                                                                        <td>{order.date}</td>
                                                                        <td>{order.price}</td>
                                                                        <td>{order.deliveryStatus}</td>
                                                                        <td><Link to={{ pathname: `/my-order/${order._id}` }}><i class="far fa-arrow-to-bottom mr-1"></i> View Order</Link></td>
                                                                    </tr>
                                                                ))} */}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* Tracking info section */}

                                            <div class="tab-pane fade" id="liton_tab_1_2">
                                                <div class="ltn__myaccount-tab-content-inner">


                                                    {/* <div className="pagetitle">
                                                            <h1>Factory Management</h1>
                                                            <nav>
                                                                <ol className="breadcrumb">
                                                                    <li className="breadcrumb-item">
                                                                        <a href="index.html">Home</a>
                                                                    </li>
                                                                    <li className="breadcrumb-item">Factory</li>
                                                                    <li className="breadcrumb-item active">Add Factory</li>
                                                                </ol>
                                                            </nav>
                                                        </div> */}

                                                    <section class="section">

                                                        <div class="card-body , card">
                                                            <h5 class="card-title">Delivery Status</h5>
                                                            {/* <button style={{ width: 42, marginLeft: 1220, marginTop: -50, marginBottom: 50, backgroundColor: "transparent", color: "blue" }} type="button" class="btn btn-link" onClick={handleDeletedeliveryrecode}>
                                                                <i class="bi bi-trash3"></i>
                                                            </button> */}
                                                            <div class="progress" style={{ height: "25px" }}>
                                                                <div
                                                                    style={{ style: "width:x%", height: "25px" }}
                                                                    class={`progress-bar w-${precentage}`}
                                                                    role="progressbar"
                                                                    aria-label="Example with label"
                                                                    aria-valuenow="75"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                >{order["Status"]}</div>
                                                            </div>



                                                            <div style={{ marginTop: 30 }}>

                                                                <p>Delivery ID : {id}</p>
                                                                <p>Status :  {order.Status}</p>
                                                                <p>Ordered Date : {order["deliveryDate"]}</p>
                                                                <p>Address : {order["deliveryAddress"]}</p>

                                                                <div >

                                                                    <button style={{ float: "right" }} type="button" className="btn btn-success" onClick={handlestatus}>
                                                                        Mark as completed
                                                                    </button>
                                                                </div>

                                                            </div>


                                                        </div>

                                                    </section>

                                                </div>
                                            </div>


                                            {/* //feedback section */}



                                            <div class="tab-pane fade" id="liton_tab_1_3">

                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <section className="section">
                                                            <div className="row">


                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">Add or update your feedback</h5>

                                                                        {/* {error && (
                                                                        <div
                                                                            className="alert alert-danger alert-dismissible fade show"
                                                                            role="alert"
                                                                        >
                                                                            {error}
                                                                            <button
                                                                                type="button"
                                                                                className="btn-close"
                                                                                data-bs-dismiss="alert"
                                                                                aria-label="Close"
                                                                            ></button>
                                                                        </div>
                                                                    )} */}

                                                                        {/* <!-- Vertical Form --> */}







                                                                        <form className="row g-3" onSubmit={handleFeedbackUpdate}>


                                                                            <div className="col-12">



                                                                                <label for="inputFID" className="form-label">
                                                                                    Order ID
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="inputFName"
                                                                                    value={orderId}
                                                                                    disabled
                                                                                />


                                                                                <label for="inputFName" className="form-label">
                                                                                    Name
                                                                                </label>
                                                                                <input
                                                                                    // style={{ height: 100 }}
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="deliveryFeedbacks"
                                                                                    onChange={(e) => {
                                                                                        setname(e.target.value);
                                                                                    }}
                                                                                    value={name}
                                                                                    required
                                                                                    disabled={isDisable}
                                                                                />



                                                                                <h4>{handleText()}</h4>
                                                                                {Array(5)
                                                                                    .fill()
                                                                                    .map((_, index) =>
                                                                                        rating >= index + 1 || hoverStar >= index + 1 ? (
                                                                                            <AiFillStar
                                                                                                onMouseOver={() => !rating && setHoverStar(index + 1)}
                                                                                                onMouseLeave={() => setHoverStar(undefined)}
                                                                                                style={{ color: "orange" }}
                                                                                                size={32}
                                                                                                onClick={() => setrating(index + 1)}
                                                                                            />
                                                                                        ) : (
                                                                                            <AiOutlineStar
                                                                                                onMouseOver={() => !rating && setHoverStar(index + 1)}
                                                                                                onMouseLeave={() => setHoverStar(undefined)}
                                                                                                style={{ color: "orange" }}
                                                                                                size={32}
                                                                                                onClick={() => setrating(index + 1)}
                                                                                            />
                                                                                        )
                                                                                    )}

                                                                                <textarea placeholder={handlePlaceHolder()} id="deliveryFeedbacks"
                                                                                    onChange={(e) => {
                                                                                        setdeliveryFeedback(e.target.value);
                                                                                    }}
                                                                                    value={deliveryFeedback}
                                                                                    required
                                                                                    disabled={isDisable}></textarea>
                                                                                {/* <button className={` ${!rating && "disabled"} `}>Submit</button> */}









                                                                            </div>

                                                                            <div className="col-12">
                                                                                {/* <label for="inputFName" className="form-label">
                                                                                Name
                                                                            </label>
                                                                            <input
                                                                                // style={{ height: 100 }}
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="deliveryFeedbacks"
                                                                                onChange={(e) => {
                                                                                    setName(e.target.value);
                                                                                }}
                                                                                value={DeliveryFeedback}
                                                                                required
                                                                                disabled={isDisable}
                                                                            /> */}
                                                                            </div>

                                                                            <div className="text-center">
                                                                                <button
                                                                                    type="submit"
                                                                                    className="btn btn-primary"
                                                                                    style={{ alignItems: 'center' }}
                                                                                    // onClick={handleFeedbackUpdate}
                                                                                    disabled={isDisable}
                                                                                >Add Feedback
                                                                                </button>
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-secondary"
                                                                                    style={{ marginLeft: "20px" }}
                                                                                    onClick={handleReset}
                                                                                    disabled={isDisable}
                                                                                >
                                                                                    Reset
                                                                                </button>


                                                                            </div>
                                                                        </form>
                                                                        {/* <!-- Vertical Form --> */}
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4"></div>
                                                            </div>
                                                        </section>
                                                    </div>








                                                    {/* <div class="ltn__form-box">
                                                        <form >
                                                            <div class="row mb-50">
                                                                <div class="col-md-6">
                                                                    <label>Name:</label>
                                                                    <input type="text" name="ltn__name"
                                                                    />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label>Email:</label>
                                                                    <input type="email" name="ltn__email"
                                                                    />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label>Phone:</label>
                                                                    <input type="text" name="ltn__phone"
                                                                    />
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <label>Address:</label>
                                                                    <input type="text" name="ltn__email"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div class="btn-wrapper">
                                                                <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Save Changes</button>
                                                            </div>
                                                        </form>
                                                    </div> */}




                                                    <div class="col-lg-6">
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <h5 class="card-title">My Feedback</h5>
                                                                <div style={{ backgroundColor: "#f8f9fa", borderRadius: 5, height: 150 }}>
                                                                    <p style={{ padding: 10 }}>
                                                                        {message}
                                                                    </p>


                                                                </div>
                                                                <button type="button" class="btn btn-link" onClick={handleFeedbackdelete}>
                                                                    {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
                                                                    delete
                                                                </button>



                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>





                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* <!-- PRODUCT TAB AREA END --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default OrderDetails;