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

    keys = keys.filter((key) => key.value !== "");

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

            <label className="order-type--label" htmlFor="pickup" id="pickup">
              <center>
                <i className="fas fa-truck-moving"></i>
                <div className="text">Pickup / Container Delivery</div>
              </center>
            </label>
            {/* <input
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
                Containers Only
              </center>
            </label> */}

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
            <label
              className="order-type--label"
              htmlFor="delivery"
              id="delivery"
            >
              <center>
                {" "}
                <i className="fas fa-truck-loading"></i>
                <div className="text">Customer Drop Off</div>
              </center>
            </label>
          </div>

          <div className="locations-area">
            <h2 className="title">Pick Your Cleanlites Location</h2>
            <LocationPicker checkValid={checkValid} />
          </div>
        </div>
        <hr />
        <div className="row">
          <div
            className="col-md-9 mt-5 m-auto p-3 "
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div>
              <p className="header--span">Form not working? </p>
              <button
                htmlFor="upload"
                id="upload-pdf"
                className="order-type--button"
                onClick={() => {
                  window.location.href =
                    "https://cleanlites.com/upload-pdf-form";
                }}
              >
                <i className="fas fa-upload"></i>
                Upload PDF
              </button>
            </div>
            <div>
              <p className="header--span">Just Containers </p>
              <button
                htmlFor="upload"
                id="upload-pdf"
                className="order-type--button"
                onClick={() => {
                  window.location.href =
                    "https://cleanlites.com/order-containers";
                }}
              >
                {/* <i className="fas fa-upload"></i> */}
                Containers Only
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderType;
