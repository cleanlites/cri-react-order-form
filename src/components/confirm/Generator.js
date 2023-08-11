import React from "react";
import PropTypes from "prop-types";

const Generator = ({ getInputValue, setInputValue }) => {
  return (
    <section className="section--generator col-md-6" data-name="Generator">
      <h4>Generator</h4>
      <input
        readOnly
        type="text"
        name="generatorCompany"
        placeholder="Generator"
        value={getInputValue("generatorCompany")}
      />
      <input
        readOnly
        type="text"
        name="generatorAddress"
        placeholder="Address"
        value={getInputValue("generatorAddress")}
      />

      <div className="city-state">
        <input
          readOnly
          className="city"
          type="text"
          name="generatorCity"
          placeholder="City"
          value={getInputValue("generatorCity")}
        />
        <input
          readOnly
          className="state"
          type="text"
          name="generatorState"
          placeholder="State"
          value={getInputValue("generatorState")}
        />
        <input
          readOnly
          className="zip"
          type="text"
          name="generatorZip"
          placeholder="Zip"
          value={getInputValue("generatorZip")}
        />
      </div>
      <input
        readOnly
        type="text"
        name="generatorContactName"
        placeholder="Contact Name"
        value={getInputValue("generatorContactName")}
      />
      <input
        readOnly
        type="text"
        name="generatorPhone"
        placeholder="Phone"
        value={getInputValue("generatorPhone")}
      />

      <input
        readOnly
        type="text"
        name="poNumber"
        placeholder="PO Number"
        value={getInputValue("poNumber")}
      />
      <label className="ml-1">Purchase Order Number</label>
    </section>
  );
};

Generator.propTypes = {};

export default Generator;
