import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Axios from 'axios';




export default function ShoppingCart()  {
    const [apiData,setApiData] = useState([]);
   
    
 const [customer_id, setCusID] = useState('');

 const [user, setUser] = useState(() => {
   // getting stored value
   const saved = localStorage.getItem("user");
   const initialValue = JSON.parse(saved);
   return initialValue || "";

 });

 useEffect(() => {
   setCusID(user.id);
 }, [])


    useEffect(()=>{
        Axios.get(`http://localhost:5000/api/v5/Cart/getAll/${customer_id}`)
        .then((getData)=>{
            setApiData(getData.data);
        })
    })
 
return(
    //<!-- SHOPING CART AREA START -->
<div class="liton__shoping-cart-area mb-120">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="shoping-cart-inner">
                    <div class="shoping-cart-table table-responsive">
                        <table class="table">
                          {/*  <thead>
                                <th class="cart-product-remove">Remove</th>
                                <th class="cart-product-image">Image</th>
                               <th class="cart-product-info">Product</th>
                                <th class="cart-product-price">Price</th>
                                <th class="cart-product-quantity">Quantity</th>
                                <th class="cart-product-subtotal">Subtotal</th> </thead>  */}
                            <tbody>
                                {apiData.map((data)=> {
                                <tr >
                                    <td class="cart-product-remove"><button type="button" > Delete </button></td>
                                    <td class="cart-product-image">
                                       
                                    </td>
                                    <td class="cart-product-info">
                                        <h4><a href="product-details.html">{data.product_name}</a></h4>
                                    </td>
                                    <td class="cart-product-price">Rs.{data.unit_price}</td>
                                    <td class="cart-product-quantity">
                                        <div class="cart-plus-minus">
                                          
                                        </div>
                                    </td>
                                  
                                </tr>
                             })}
                                
                               
                                <tr class="cart-coupon-row">
                                    <td colspan="6">
                                        <div class="cart-coupon">
                                            <input type="text" name="cart-coupon" placeholder="Coupon code"/>
                                            <button type="submit" class="btn theme-btn-2 btn-effect-2">Apply Coupon</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="submit" class="btn theme-btn-2 btn-effect-2-- disabled">Update Cart</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="shoping-cart-total mt-50">
                        <h4>Cart Totals</h4>
                      
                        <div class="btn-wrapper text-right">
                            <a href="checkout.html" class="theme-btn-1 btn btn-effect-1">Proceed to checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 

);


}