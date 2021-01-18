import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../AppContext";

const LocationPicker = ({ checkValid }) => {
  const {
    setInputValue,
    getInputValue,
    appState: { inputs },
  } = useContext(AppContext);

  return inputs.CleanlitesFacility.choices.map((facility) => (
    <div
      key={`cri-location-picker--${facility.value}`}
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
          setInputValue({ name: "CleanlitesFacility", value: facility.value });
          checkValid();
        }}
      >
        <h2>{facility.text}</h2>
      </label>
    </div>
  ));
};

export default LocationPicker;
