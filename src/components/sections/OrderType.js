import React from "react";

const OrderType = ({ setValid }) => {
  return (
    <div className="form-values">
      <div className="container">
        <div className="row">
          <div className="col-md-12 order-type--box">
            <input
              className="auto-next"
              type="radio"
              name="orderType"
              value="Pickup"
              id="pickup"
            />
            <label className="order-type--label" htmlFor="pickup">
              <center>
                <i className="fas fa-truck-moving"></i>
                Pickup
              </center>
            </label>
            <input
              className="auto-next"
              type="radio"
              name="orderType"
              value="Delivery"
              id="delivery"
            />
            <label className="order-type--label" htmlFor="delivery">
              <center>
                {" "}
                <i className="fas fa-truck-loading"></i>
                Delivery
              </center>
            </label>
          </div>
          <div className="locations-area"></div>

          <div className="col-md-9 mt-5 m-auto p-3">
            <center>
              <p>
                Welcome to the new Cleanlites Order form. Once you fill this
                out, we will email you a copy of the PDF
              </p>
            </center>
          </div>
          <div className="col-md-12 ">
            <center>
              <button htmlFor="upload" id="upload-pdf">
                <i className="fas fa-upload"></i>
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
