import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../AppContext";
import formatPhoneNumber from "../../resources/phoneString";
import states from "../../resources/states";
const Generator = () => {
  const {
    setInputValue,
    getInputValue,
    setGeneratorSame,
    setValid,
    nextPane,
    appState: { inputs, generatorSame, sections },
  } = useContext(AppContext);

  const checkValid = () => {
    let keys = Object.keys(inputs).filter(
      (key) => key.slice(0, 9) === "generator",
    );
    let validArray = [];

    keys.forEach((k) => {
      if (inputs[k].value !== "") {
        validArray.push(inputs[k].value);
        return;
      }
    });
    console.log(validArray.length);

    if (validArray.length > 6) {
      setValid("Generator", true, () => {});
      return true;
    } else return false;
  };

  const handleSetGeneratorSame = () => {
    setGeneratorSame(true).then(() => {
      if (checkValid()) {
        setTimeout(() => {
          nextPane();
        }, 500);
      }
    });
  };

  const setTheInputValue = (value) => {
    if (value.name === "generatorPhone") {
      value.value = formatPhoneNumber(value.value);
    }
    setInputValue(value);
    checkValid();
  };

  return (
    <div className="form-values">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto input--wrapper">
            <input
              className="auto-next big-button-input"
              type="checkbox"
              name="generator-same"
              id="generator-same"
              checked={generatorSame}
              readOnly
            />
            <div className="big-button">
              <label
                htmlFor="generator-same"
                onClick={() => handleSetGeneratorSame()}
              >
                <i className="fas fa-hand-pointer"></i> Generator is the Same as
                Billing
              </label>
            </div>
            <div className="divider2">Generator Info</div>
            <input
              type="text"
              name="generatorCompany"
              placeholder="Generator Name"
              onChange={(e) => setTheInputValue(e.target)}
              value={inputs.generatorCompany.value}
            />
            <input
              type="text"
              name="generatorAddress"
              placeholder="Address"
              onChange={(e) => setTheInputValue(e.target)}
              value={inputs.generatorAddress.value}
            />
            <div className="city-state">
              <input
                className="city"
                type="text"
                name="generatorCity"
                placeholder="City"
                onChange={(e) => setTheInputValue(e.target)}
                value={inputs.generatorCity.value}
              />
              <select
                className="state"
                name="generatorState"
                onChange={(e) => setTheInputValue(e.target)}
                value={inputs.generatorState.value}
              >
                {states.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <input
                className="zip"
                type="text"
                name="generatorZip"
                placeholder="Zip"
                onChange={(e) => setTheInputValue(e.target)}
                value={inputs.generatorZip.value}
              />
            </div>
            <input
              type="text"
              name="billingContactName"
              placeholder="Contact Name"
              onChange={(e) => setTheInputValue(e.target)}
              value={inputs.billingContactName.value}
            />
            <input
              type="text"
              name="generatorPhone"
              placeholder="Phone"
              onChange={(e) => setTheInputValue(e.target)}
              value={inputs.generatorPhone.value}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
