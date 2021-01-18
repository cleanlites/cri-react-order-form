import React, { useContext, useEffect } from "react";
import LocationPicker from "./LocationPicker";
import { AppContext } from "../../AppContext";
const OrderType = () => {
  const {
    setInputValue,
    getInputValue,
    nextPane,
    setValid,
    appState: { inputs, generatorSame, sections },
  } = useContext(AppContext);

  const checkValid = () => {
    let keys = [inputs.orderType, inputs.CleanlitesFacility];
    let validArray = [];

    keys = keys.filter((key) => key.value !== "");
    console.log(keys);
    if (keys.length === 2) {
      setValid("Order", true, () => {
        setTimeout(() => {
          nextPane();
        }, 700);
      });
    }
    // const billingInputs = inputs.filter(input => inputs.name.slice(0, 7))
  };

  const handleChange = (value) => {
    setInputValue(value.target);
    checkValid();
  };
  return (
    <div className="form-values">
      <div className="container">
        <div className="row">
          <div className="col-md-12 order-type--box">
            <input
              checked={getInputValue("orderType") === "orderType--pickup"}
              readOnly
              className="auto-next"
              type="radio"
              name="orderType"
              value="orderType--pickup"
              onClick={handleChange}
              id="pickup"
            />
            <label className="order-type--label" htmlFor="pickup">
              <center>
                <i className="fas fa-truck-moving"></i>
                Pickup
              </center>
            </label>
            <input
              checked={getInputValue("orderType") === "orderType--delivery"}
              readOnly
              className="auto-next"
              type="radio"
              name="orderType"
              value="orderType--delivery"
              onClick={handleChange}
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
          <div className="locations-area">
            {/* {inputs[]} */}
            <LocationPicker checkValid={checkValid} />
          </div>

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
