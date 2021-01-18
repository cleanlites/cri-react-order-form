import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../AppContext";
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
      (key) => key.slice(0, 9) === "generator"
    );
    let validArray = [];

    keys.forEach((k) => {
      if (inputs[k].value !== "") {
        validArray.push(inputs[k].value);
        return;
      }
    });
    if (validArray.length > 6) {
      setValid("Generator", true, () => {
        setTimeout(() => {
          nextPane();
        }, 500);
      });
    }
  };

  const handleSetGeneratorSame = () => {
    setGeneratorSame().then(() => checkValid());
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
              onClick={() => handleSetGeneratorSame()}
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
              value={inputs.generatorCompany.value}
            />
            <input
              type="text"
              name="generatorAddress"
              placeholder="Address"
              onChange={(e) => setInputValue(e.target)}
              value={inputs.generatorAddress.value}
            />
            <div className="city-state">
              <input
                className="city"
                type="text"
                name="generatorCity"
                placeholder="City"
                onChange={(e) => setInputValue(e.target)}
                value={inputs.generatorCity.value}
              />
              <select
                className="state"
                name="generatorState"
                onChange={(e) => setInputValue(e.target)}
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
                onChange={(e) => setInputValue(e.target)}
                value={inputs.generatorZip.value}
              />
            </div>
            <input
              type="text"
              name="generatorContactName"
              placeholder="Contact Name"
              onChange={(e) => setInputValue(e.target)}
              value={inputs.generatorContactName.value}
            />
            <input
              type="text"
              name="generatorPhone"
              placeholder="Phone"
              onChange={(e) => setInputValue(e.target)}
              value={inputs.generatorPhone.value}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
