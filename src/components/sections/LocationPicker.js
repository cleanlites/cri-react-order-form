import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

const LocationPicker = ({ checkValid }) => {
  const {
    setInputValue,
    getInputValue,
    appState: { inputs },
  } = useContext(AppContext);

  return (
    <div className="locations-area">
      {inputs.CleanlitesFacility.choices
        .sort((a, b) => a.text.localeCompare(b.text))
        .map((facility, i) => (
          <div
            key={`cri-location-picker--${facility.value}-${i}`}
            className="form-button1 location-selector"
          >
            <input
              checked={getInputValue("CleanlitesFacility") == facility.value}
              type="radio"
              readOnly
              className="auto-next"
              id={`location-label--${facility.text}`}
              name="CleanlitesFacility"
              // onSelect={(e) => setInputValue(e.target)}
              value={facility.value}
            />

            <label
              htmlFor={`location-label--${facility.text}`}
              onClick={(e) => {
                setInputValue({
                  name: "CleanlitesFacility",
                  value: facility.value,
                });
                checkValid();
              }}
            >
              <h2 className="label-with-options">{facility.text}</h2>
            </label>
          </div>
        ))}
    </div>
  );
};

export default LocationPicker;
