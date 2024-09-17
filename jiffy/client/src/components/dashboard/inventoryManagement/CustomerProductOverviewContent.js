import React from 'react';

import {useState, useEffect} from 'react';

function CustomerProductOverviewContent(){

  const pathname = window.location.pathname
  const id = pathname.split("/")[2]



 //fetching details of a single product
 const [product, setProductDetails] = useState(
    {
      product_name: "",
      unit_price: "",
      reorder_level: "",
      weight_per_unit: "",
      units_in_stock: "",
      description: "",
      photo: "",
      __v: 0,
      _id: ""
    })

    useEffect(() => {
      const fetchProduct = async () => {
        
        const response = await fetch(`/api/inventoryProducts/${id}`)
        const json = await response.json()
        
        if (response.ok) {
          
          setProductDetails(
            {
              product_name: `${json["product_name"]}`,
              unit_price: `${json["unit_price"]}`,
              reorder_level: `${json["reorder_level"]}`,
              weight_per_unit: `${json["weight_per_unit"]}`,
              units_in_stock: `${json["units_in_stock"]}`,
              description: `${json["description"]}`,
              photo: `${json["photo"]}`,
              __v: 0,
              _id: `${json["_id"]}`
            })
        } else{
          console.log("not ok")
        }
         
      }
  
      fetchProduct()
      
    }, [setProductDetails])


    return(
        <React.Fragment>

<div class="body-wrapper">



<div class="ltn__utilize-overlay"></div>



{/* <!-- SHOP DETAILS AREA START -->  */}
<div class="ltn__shop-details-area pb-85">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="ltn__shop-details-inner mb-60">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="ltn__shop-details-img-gallery">
                               
                            <img src={(product["photo"] == '') ? 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png' : require("./uploadedImages/"+product["photo"])}  alt="img" />
                                
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="modal-product-info shop-details-info pl-0">
                              
                                <h3>{product["product_name"]}</h3>
                                <div class="product-price">
                                    <span>Rs. {product["unit_price"]} /=</span>
                                </div>
                                <div class="modal-product-meta ltn__product-details-menu-1">
                                    <hr />
                                </div>
                                <div class="ltn__product-details-menu-2">
                                    <ul>
                                        <li>
                                            <a href="#" class="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                            
                                                <span>BUY NOW</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                <i class="fas fa-shopping-cart"></i>
                                                <span>ADD TO CART</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="ltn__product-details-menu-3">
                                    <ul>
                                        <li>
                                            <a href="#" class="" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                <i class="far fa-heart"></i>
                                                <span>Add to Wishlist</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="" title="Compare" data-toggle="modal" data-target="#quick_view_modal">
                                                <i class="fas fa-exchange-alt"></i>
                                                <span>Compare</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                                <div class="ltn__social-media">
                                    <ul>
                                        <li>Share:</li>
                                        <li><a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#" title="Linkedin"><i class="fab fa-linkedin"></i></a></li>
                                        <li><a href="#" title="Instagram"><i class="fab fa-instagram"></i></a></li>
                                        
                                    </ul>
                                </div>
                                <hr />
                                <div class="ltn__safe-checkout">
                                    <h5>Guaranteed Safe Checkout</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Shop Tab Start --> */}
                <div class="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                    <div class="ltn__shop-details-tab-menu">
                        <div class="nav">
                            <a class="active show" data-toggle="tab" href="#liton_tab_details_1_1">Description</a>
                        </div>
                    </div>
                    <div class="tab-content">
                       <p>{product["description"]}</p>
                    </div>
                </div>
                {/* <!-- Shop Tab End --> */}
            </div>
        </div>
    </div>
</div>
{/* <!-- SHOP DETAILS AREA END --> */}



</div>


        </React.Fragment>
    )
}

export default CustomerProductOverviewContent;