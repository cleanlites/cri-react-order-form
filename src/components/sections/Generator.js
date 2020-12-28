import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../AppContext";
import states from "../../resources/states";
const Generator = () => {
  const {
    setInputValue,
    getInputValue,
    setGeneratorSame,
    appState: { generatorSame, sections },
  } = useContext(AppContext);

  const handleGetInputValue = (name) => {
    if (generatorSame) {
      return getInputValue(name.replace("generator", "billing"));
    }

    return getInputValue(name);
  };
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
              onChange={setGeneratorSame}
              checked={generatorSame}
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
              onChange={(e) => setInputValue(e.target)}
              value={handleGetInputValue("generatorCompany")}
            />
            <input
              type="text"
              name="generatorAddress"
              placeholder="Address"
              onChange={(e) => setInputValue(e.target)}
              value={handleGetInputValue("generatorAddress")}
            />
            <div className="city-state">
              <input
                className="city"
                type="text"
                name="generatorCity"
                placeholder="City"
                onChange={(e) => setInputValue(e.target)}
                value={handleGetInputValue("generatorCity")}
              />
              <select
                className="state"
                name="generatorState"
                onChange={(e) => setInputValue(e.target)}
                value={handleGetInputValue("generatorState")}
              >
                {states.map((s) => (
                  <option>{s}</option>
                ))}
              </select>
              <input
                className="zip"
                type="text"
                name="generatorZip"
                placeholder="Zip"
                onChange={(e) => setInputValue(e.target)}
                value={handleGetInputValue("generatorZip")}
              />
            </div>
            <input
              type="text"
              name="generatorContactName"
              placeholder="Contact Name"
              onChange={(e) => setInputValue(e.target)}
              value={handleGetInputValue("generatorContactName")}
            />
            <input
              type="text"
              name="generatorPhone"
              placeholder="Phone"
              onChange={(e) => setInputValue(e.target)}
              value={handleGetInputValue("generatorPhone")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
