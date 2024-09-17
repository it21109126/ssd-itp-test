import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios';
import { useParams } from 'react-router-dom'


function CusEbill() {

  const [apiData, setApiData] = useState([]);
  const [paymentData, setPayment] = useState([]);
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const [recieverName, setRecieverNAme] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');



  const [cus_id, setCusID] = useState('');

  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";

  });

  const [cardNumberERR,setCardNumberERR]=useState({});
const [cvcNumberERR,setCvcNumberERR]=useState({});
const [expireDateERR,setExpireERR]=useState({});
const [phoneNumberERR,setphoneERR]=useState({});

  const formValidation = () =>{
    const cardNumberERR = {};
    const cvcNumberERR = {};
    const expireDateERR ={};
    const phoneNumberERR = {};
    let isValid = true;
 
    if(cvc.trim().length < 3){
     cvcNumberERR.cvcShort="Invalid CVC Number!";
     isValid = false;
    }
    if(cvc.trim().length > 3){
     cvcNumberERR.cvcShort="Invalid CVC Number!";
     isValid = false;
    }
 
    if(isNaN(cvc)){
     cvcNumberERR.cvcShort="Invalid CVC Number!";
     isValid = false;
    }
    
 
   if(number.toString().length<16){
     cardNumberERR.numberShort="Invalid Card Number!"; 
     isValid = false;
   }
 
    if(isNaN(number)){
     cardNumberERR.numberShort="Invalid Card Number!"; 
     isValid = false;
    }
 
    const ex1 = String(expiry).slice(0,2)
    const month = Number(ex1)
 
    if(month>12) {
     expireDateERR.expireShort="Invalid Expire Date!"
     isValid = false;
    }
    if(isNaN(phoneNumber)){
      phoneNumberERR.phoneShort="Invalid phone Number!"; 
      isValid = false;
     }
     if(!(phoneNumber.toString().length==10)){
      phoneNumberERR.phoneShort="Invalid phone Number!"; 
      isValid = false;
     }
 
    console.log()
 
    setCvcNumberERR(cvcNumberERR);
    setCardNumberERR(cardNumberERR);
    setExpireERR(expireDateERR);
    setphoneERR(phoneNumberERR);
    return isValid;
 }
 
  useEffect(() => {
    setCusID(user.id);
  
  }, [])

  console.log("dsdaaaaa")
  console.log(cus_id);

  const sendDataToAPI = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if(isValid){
    if (paymentData.length === 0) {

      axios.post('http://localhost:5000/api/v3/payment/',
        {
          cus_id, number, name, expiry, cvc,email
        }
      )
    }
    else {

      axios.put(`http://localhost:5000/api/v3/payment/updatePayment/${cus_id}`,
        {
          cus_id, number, name, expiry, cvc,email
        }
      )
    }
    axios.post(`http://localhost:5000/api/v4/Delevery/`,
      {
        recieverName, address, phoneNumber, orderID
      }
    )

   
    var status = "Pending";
    var PaymentStatuss="Paid"
    var delevary_status = "Not shipped";

    axios.post(`http://localhost:5000/api/v6/orders/`,
      {
        cus_id,status,delevary_status,PaymentStatuss,recieverName,address,phoneNumber
      }

    ).then((getData)=>{
      //setOrderData(getData.data);
      var  order_ID=getData.data._id;
      
      console.log( getData.data);
      apiData.map((data) => {
        var product_id=data.product_ID;
        var quantity = data.quantity;
        axios.post('http://localhost:5000/api/v7/orderedProduct/create',
        {
          order_ID,product_id,quantity
        }
        )
      })
      
      axios.post('http://localhost:5000/api/v8/incomeHistory/insert', 
      {  
        order_ID,total
     })
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    })
   
    
   // alert("Successfully added the order");
  //  window.location="/account"

  }
}

  //const id= "63288b61593a63c2c1880af7"
  const customer_id = "632888d1d9c66d7fc9973317";


const[orderData,setOrderData] = useState();

  console.log("hujghih");




  const fetchCartData = () => {
    
    const billAPI = `http://localhost:5000/api/v1/eBill/getall/${user.id}`;
    const paymentAPI = `http://localhost:5000/api/v3/payment/getPayment/${user.id}`;

    const getBill = axios.get(billAPI)
    const getPayment = axios.get(paymentAPI);

    axios.all([getBill, getPayment]).then(

      axios.spread((...allData) => {
        const alldataBill = allData[0]
        const alldataPayments = allData[1]
        setPayment(alldataPayments.data)
        setApiData(alldataBill.data)
        setNumber(alldataPayments.data.Card_Number)
        setName(alldataPayments.data.Card_holder_name)
        setExpiryDate(alldataPayments.data.Card_expiry_date)
        setCvc(alldataPayments.data.Card_CVC)

      })
    )
  }

 
  const fetchBuyNowData = () => {
    
    const billAPI = `http://localhost:5000/api/v1/eBill/getone/${id}/${qty}`;
    const paymentAPI = `http://localhost:5000/api/v3/payment/getPayment/${user.id}`;

    const getBill = axios.get(billAPI)
    const getPayment = axios.get(paymentAPI);

    axios.all([getBill, getPayment]).then(

      axios.spread((...allData) => {
        const alldataBill = allData[0]
        const alldataPayments = allData[1]
        setPayment(alldataPayments.data)
        setApiData(alldataBill.data)
        setNumber(alldataPayments.data.Card_Number)
        setName(alldataPayments.data.Card_holder_name)
        setExpiryDate(alldataPayments.data.Card_expiry_date)
        setCvc(alldataPayments.data.Card_CVC)

      })
    )
  }
  const [userData,setUserData] = useState([]);

  
  const fetchUserDetails =()=>{
    axios.get(`http://localhost:5000/api/users/${user.id}`)
    .then((getData)=>{
      setUserData(getData.data);
      setRecieverNAme(getData.data.name);
      setAddress(getData.data.address);
      setPhoneNumber(getData.data.phone);
      setEmail(getData.data.email)
    })
  }
const aa=45;

  const shouldLog = useRef(true);
  const [IDD , setID] = useState();
  const [VAL , setval] = useState();
  console.log('Testtttt');
  console.log(IDD);
  const {id,qty} = useParams();
  //const{count} = useParams("qty");
  //console.log(count);

//const id=null;


  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      if(id==null) {
        fetchCartData()
       }else{
        fetchBuyNowData()
       }
       fetchUserDetails();
   
    }
  }, []);

 


console.log(IDD);

  var total
  var orderID
  apiData.map((data) => {
    total = apiData[0].total_Amount
    orderID = apiData[0].Order_ID

  })
  //console.log(orderID);


  /*  const Cardnumber=paymentData.Card_Number
    const Username=paymentData.Card_holder_name
    const expireDate=paymentData.Card_expiry_date
    const Cvc=paymentData.Card_CVC
    */


  return (
    <main id="main" className="main">

      <div className="pagetitle" style={{}}>

        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Tables</li>
            <li className="breadcrumb-item active">General</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">E-Bill</h5>

              {/* <!-- Default Table --> */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">products ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">quantity</th>
                    <th scope="col">price</th>
                  </tr>
                </thead>
                <tbody>
                  {apiData.map((data) => {

                    return (

                      <tr>
                        <th scope="row">{data.product_ID}</th>
                        <td>{data.product_Name}</td>
                        <td>{data.quantity}</td>
                        <td>{data.product_price}</td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">Total Amount</th>
                    <td></td>
                    <td></td>
                    <th>
                      {total}
                    </th>
                  </tr>

                </tbody>
              </table>
          
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <h5 className="card-title">Shipping details</h5>
            <div className="card-body">
              <form className="row g-3">

                <div class="col-md-6">
                  <div class="input-item input-item-name ltn__custom-icon">
                  Your Name
                    <input type="text" onChange={(e) => setRecieverNAme(e.target.value)} defaultValue={recieverName} id="floatingName"  />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="input-item input-item-website ltn__custom-icon">
                  Your Address
                    <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} defaultValue={address} id="floatingName"  />
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="input-item input-item-website ltn__custom-icon">
                  Phone
                    <input type="text" className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} defaultValue={phoneNumber} id="floatingCity"  />
                    {Object.keys(phoneNumberERR).map((key) => {
                      return <div style={{color:"red"}}>{phoneNumberERR[key]}</div>
                    })}
                  </div>
                </div>

                

                <br />
                <div className="col-md-6">
                </div>

                <h5 className="card-title">Payment details</h5>


                <div className="col-md-12">
                  <div className="form-floating">
                  Card Number
                    <input type="text" className="form-control" defaultValue={number} onChange={(e) => setNumber(e.target.value)} name="number" placeholder="Card Number" />
                    {Object.keys(cardNumberERR).map((key) => {
                      return <div style={{color:"red"}}>{cardNumberERR[key]}</div>
                    })}
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-floating">
                  Card holder's name
                    <input type="text" className="form-control" defaultValue={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Card holder's name" />
                  </div>
                </div>


                <div className="col-md-6">

                  <div className="form-floating">
                  Expire date
                    <input type="text" className="form-control" defaultValue={expiry} onChange={(e) => setExpiryDate(e.target.value)} name="expiredate" placeholder="Expire date" />
                    {Object.keys(expireDateERR).map((key) => {
                      return <div style={{color:"red"}}>{expireDateERR[key]}</div>
                    })}
                  </div>
                </div>


                <div className="col-md-2">
                  <div className="form-floating">
                  CVC
                    <input type="text" className="form-control" defaultValue={cvc} onChange={(e) => setCvc(e.target.value)} name="CVC" placeholder="Zip" />
                    {Object.keys(cvcNumberERR).map((key) => {
                      return <div style={{color:"red"}}>{cvcNumberERR[key]}</div>
                    })}
                  </div>
                </div>
                <br/>
                <div className="col-md-4">
                </div>

                <div className="text-center">
                  <button class="btn theme-btn-1 btn-effect-1 text-uppercase" onClick={(e) => sendDataToAPI(e)} type="submit">Place order</button>


                </div>
              </form>

            </div>
          </div>

        </div>
      </div>


    </main>
  );

}
export default CusEbill;