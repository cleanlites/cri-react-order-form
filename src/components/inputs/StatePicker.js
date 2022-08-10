import React from "react";
import states from "../../resources/states";
// import Form from "react-bootstrap/Form";

const StatePicker = ({ name, value, onChange }) => {
  return (
    <>
      <select
        className="state form-select"
        name={name}
        onChange={onChange}
        value={value}
      >
        {states.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
    </>
  );
};

export default StatePicker;
