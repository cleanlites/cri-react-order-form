import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import states from "../../resources/states";
const Billing = (props) => {
  const {
    setInputValue,
    getInputValue,
    appState: { inputs },
  } = useContext(AppContext);
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
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("billingCompany")}
            />
            <input
              type="text"
              name="billingAddress"
              placeholder="Address (required)"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("billingAddress")}
            />

            <div className="city-state">
              <input
                className="city"
                type="text"
                name="billingCity"
                placeholder="City (required)"
                onChange={(e) => setInputValue(e.target)}
                value={getInputValue("billingCity")}
              />
              <select
                className="state"
                name="billingState"
                onChange={(e) => setInputValue(e.target)}
                value={getInputValue("billingState")}
              >
                {states.map((s) => (
                  <option>{s}</option>
                ))}
              </select>

              <input
                className="zip"
                type="text"
                name="billingZip"
                placeholder="Zip Code"
                onChange={(e) => setInputValue(e.target)}
                value={getInputValue("billingZip")}
              />
            </div>

            <input
              type="text"
              name="billingContactName"
              placeholder="Contact Name (required)"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("billingContactName")}
            />
            <input
              type="text"
              name="billingPhone"
              placeholder="Phone (required)"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("billingPhone")}
            />

            <input
              type="text"
              name="billingEmail"
              placeholder="eMail Address (required)"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("billingEmail")}
            />
            <p>*We will send a copy of this form to this email.</p>
            <input
              type="text"
              name="poNumber"
              className="poNumber"
              placeholder="PO Number (optional)"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("poNumber")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
