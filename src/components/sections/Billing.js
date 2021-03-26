import React, { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import formatPhoneNumber from "../../resources/phoneString";
import states from "../../resources/states";
const Billing = (props) => {
  const {
    setInputValue,
    getInputValue,
    setValid,
    nextPane,
    appState: { inputs },
  } = useContext(AppContext);

  const checkValid = () => {
    let keys = Object.keys(inputs).filter(
      (key) => key.slice(0, 7) === "billing"
    );
    let validArray = [];

    keys.forEach((k) => {
      if (inputs[k].value !== "") {
        validArray.push(inputs[k].value);
        return;
      }
    });
    if (validArray.length > 7) {
      setValid("Billing", true, () => {});
    }
    // const billingInputs = inputs.filter(input => inputs.name.slice(0, 7))
  };
  const setTheInputValue = (value) => {
    if (value.name === "billingPhone") {
      value.value = formatPhoneNumber(value.value);
    }
    setInputValue(value);
    checkValid();
  };

  return (
    <div className="form-values">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="divider2">Billing Info</div>
            <input
              type="text"
              name="billingCompany"
              placeholder="Billing Company (required)"
              onChange={(e) => setTheInputValue(e.target)}
              value={getInputValue("billingCompany")}
            />
            <input
              type="text"
              name="billingAddress"
              placeholder="Address (required)"
              onChange={(e) => setTheInputValue(e.target)}
              value={getInputValue("billingAddress")}
            />

            <div className="city-state">
              <input
                className="city"
                type="text"
                name="billingCity"
                placeholder="City (required)"
                onChange={(e) => setTheInputValue(e.target)}
                value={getInputValue("billingCity")}
              />
              <select
                className="state"
                name="billingState"
                onChange={(e) => setTheInputValue(e.target)}
                value={getInputValue("billingState")}
              >
                {states.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>

              <input
                className="zip"
                type="text"
                name="billingZip"
                placeholder="Zip Code"
                onChange={(e) => setTheInputValue(e.target)}
                value={getInputValue("billingZip")}
              />
            </div>

            <input
              type="text"
              name="billingContactName"
              placeholder="Contact Name (required)"
              onChange={(e) => setTheInputValue(e.target)}
              value={getInputValue("billingContactName")}
            />
            <input
              type="text"
              name="billingPhone"
              placeholder="Phone (required)"
              onChange={(e) => setTheInputValue(e.target)}
              value={getInputValue("billingPhone")}
            />

            <input
              type="text"
              name="billingEmail"
              placeholder="eMail Address (required)"
              onChange={(e) => setTheInputValue(e.target)}
              value={getInputValue("billingEmail")}
            />
            <p>*We will send a copy of this form to this email.</p>
            <input
              type="text"
              name="poNumber"
              className="poNumber"
              placeholder="PO Number (optional)"
              onChange={(e) => setTheInputValue(e.target)}
              value={getInputValue("poNumber")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
