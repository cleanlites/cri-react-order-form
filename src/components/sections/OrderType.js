import React from 'react';

const OrderType = () => {
    return (
        <div class="form-values">
            <div class="container">
              <div class="row">
                <div class="col-md-12 order-type--box">
                  <input class="auto-next" type="radio" name="orderType" value="Pickup" id="pickup"/>
                  <label class="order-type--label" for="pickup">
                    <center> <i class="fas fa-truck-moving"></i> 
                      Pickup</center>
                  </label>
                  <input class="auto-next" type="radio" name="orderType" value="Delivery" id="delivery"/>
                  <label class="order-type--label" for="delivery">
                    <center> <i class="fas fa-truck-loading"></i>
                      Delivery</center>
                  </label>
                </div>
                <div class="locations-area">
                </div>

                <div class="col-md-9 mt-5 m-auto p-3">
                  <center>
                    <p>Welcome to the new Cleanlites Order form. Once you fill this out,
                      we will email you a copy of the PDF</p>
                  </center>
                </div>
                <div class="col-md-12 ">
                  <center>
                    <button for="upload" id="upload-pdf"> 
                      <i class="fas fa-upload"></i>
                      Upload PDF
                    </button>
                  </center>
                </div>
              </div>
            </div>
        </div>
    );
};



export default OrderType;
