import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios';
import { useParams } from 'react-router-dom'

function SupplierPayment() {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v9/supplierOrder/`)
        .then((getData)=>{
          setApiData(getData.data);
        })         
       
        }
      , []);
    


    return(
        <section class="section" style={{marginLeft:'21%' ,marginTop:'10%'}}>
        <div class="row">
          <div class="col-lg-10">
  
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Default Table</h5>
  
  
                <table class="table">
                  <thead>
                    <tr>
              
                      <th scope="col">Raw material</th>
                      <th scope="col">quantity</th>
                      <th scope="col">Status </th>
                    </tr>
                  </thead>
                  <tbody>
                   {apiData.map((data) => {

                    return (

                      <tr>
                        <td>{data.rawMaterial}</td>
                        <td>{data.quantity}</td>

                        <td>{data.orderStatus}</td>
                  <Link to ={{pathname:`/AddSupplierPayment/${data.supplierId}/${data._id}`}}>   
              <button type="button" class="btn btn-outline-primary">Add Payment</button>
                 </Link>
                      </tr>
                    )
                  })}
                      
                  </tbody>
                </table>
        
              </div>
            </div>
  
           
          </div>
        </div>
      </section>

    );
}

export default SupplierPayment;