import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import states from "../../resources/states";
const Billing = (props) => {
  const {
    setInputValue,
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
              // value={inputs.find((i) => i.name === "billingCompany").value}
            />
            <input
              type="text"
              name="billingAddress"
              placeholder="Address (required)"
              onChange={(e) => setInputValue(e.target)}
              // value={inputs.find((i) => i.name === "billingAddress").value}
            />

            <div className="city-state">
              <input
                className="city"
                type="text"
                name="billingCity"
                placeholder="City (required)"
                onChange={(e) => setInputValue(e.target)}
                // value={inputs.find((i) => i.name === "billingCity").value}
              />
              <select
                className="state"
                name="billingState"
                onChange={(e) => setInputValue(e.target)}
                // value={inputs.find((i) => i.name === "billingState").value}
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
                // value={inputs.find((i) => i.name === "billingZip").value}
              />
            </div>

            <input
              type="text"
              name="billingContactName"
              placeholder="Contact Name (required)"
              onChange={(e) => setInputValue(e.target)}
              // value={inputs.find((i) => i.name === "billingContactName").value}
            />
            <input
              type="text"
              name="billingPhone"
              placeholder="Phone (required)"
              onChange={(e) => setInputValue(e.target)}
              // value={inputs.find((i) => i.name === "billingPhone").value}
            />

            <input
              type="text"
              name="billingEmail"
              placeholder="eMail Address (required)"
              onChange={(e) => setInputValue(e.target)}
              // value={inputs.find((i) => i.name === "billingEmail").value}
            />
            <p>*We will send a copy of this form to this email.</p>
            <input
              type="text"
              name="poNumber"
              className="poNumber"
              placeholder="PO Number (optional)"
              onChange={(e) => setInputValue(e.target)}
              // value={inputs.find((i) => i.name === "poNumber").value}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
