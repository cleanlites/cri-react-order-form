import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import states from "../../resources/states";
const Generator = () => {
  const {
    setInputValue,
    appState: { inputs },
  } = useContext(AppContext);
  return (
    <div className="form-values">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <input
              className="auto-next big-button-input"
              type="checkbox"
              name="generator-same"
              id="generator-same"
            />
            <div className="big-button">
              <label htmlFor="generator-same">
                <i className="fas fa-hand-pointer"></i> Generator is the Same as
                Billing
              </label>
            </div>
            <div className="divider2">Generator Info</div>
            <input
              type="text"
              name="generatorCompany"
              placeholder="Generator Name"
            />
            <input type="text" name="generatorAddress" placeholder="Address" />
            <div className="city-state">
              <input
                className="city"
                type="text"
                name="generatorCity"
                placeholder="City"
              />
              {/* <select
                className="state"
                name="generatorState"
                onChange={(e) => setInputValue(e.target)}
                value={inputs.find((i) => i.name === "billingState").value}
              >
                {states.map((s) => (
                  <option>{s}</option>
                ))}
              </select> */}
              <input
                className="zip"
                type="text"
                name="generatorZip"
                placeholder="Zip"
              />
            </div>
            <input
              type="text"
              name="generatorContactName"
              placeholder="Contact Name"
            />
            <input type="text" name="generatorPhone" placeholder="Phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
