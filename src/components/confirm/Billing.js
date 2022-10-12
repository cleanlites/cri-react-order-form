import React from "react";
import PropTypes from "prop-types";

const Billing = ({ getInputValue, setInputValue }) => {
  return (
    <section className="section--contact col-md-6" data-name="Billing">
      <input
        readOnly
        type="text"
        name="billingCompany"
        placeholder="Billing Company"
        value={getInputValue("billingCompany")}
        // onLoad={()=>}
      />
      <input
        readOnly
        type="text"
        name="billingAddress"
        placeholder="Address"
        value={getInputValue("billingAddress")}
      />

      <div className="city-state">
        <input
          readOnly
          className="city"
          type="text"
          name="billingCity"
          value={getInputValue("billingCity")}
          placeholder="City"
        />
        <input
          readOnly
          className="state"
          type="text"
          name="billingState"
          placeholder="State"
          value={getInputValue("billingState")}
        />
        <input
          readOnly
          className="zip"
          type="text"
          name="billingZip"
          placeholder="Zip"
          value={getInputValue("billingZip")}
        />
      </div>

      <input
        readOnly
        type="text"
        name="billingContactName"
        placeholder="Billing Name"
        value={getInputValue("billingContactName")}
      />
      <input
        readOnly
        type="text"
        name="billingPhone"
        placeholder="Billing Phone"
        value={getInputValue("billingPhone")}
      />
      <br />

      <input
        readOnly
        type="text"
        name="billingEmail"
        placeholder="Email"
        value={getInputValue("billingEmail")}
      />
      <div className="pickup-delivery">
        <input
          readOnly
          type="radio"
          id="radioOne"
          name="orderType"
          checked={getInputValue("orderType") === "orderType--pickup"}
        />
        <label htmlFor="radioOne" className="radio">
          Pickup
        </label>
        <input
          readOnly
          type="radio"
          id="radioTwo"
          name="orderType"
          checked={getInputValue("orderType") === "orderType--dropoff"}
        />
        <label htmlFor="radioTwo" className="radio">
          Delivery
        </label>
      </div>
    </section>
  );
};

Billing.propTypes = {};

export default Billing;
