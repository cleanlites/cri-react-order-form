import React from "react";
import PropTypes from "prop-types";

const Generator = ({ getInputValue }) => {
  return (
    <section className="section--generator col-md-6" data-name="Generator">
      <input
        type="text"
        name="generatorCompany"
        placeholder="Generator"
        value={getInputValue("generatorAddress")}
      />
      <input
        type="text"
        name="generatorAddress"
        placeholder="Address"
        value={getInputValue("generatorAddress")}
      />

      <div className="city-state">
        <input
          className="city"
          type="text"
          name="generatorCity"
          placeholder="City"
          value={getInputValue("generatorCity")}
        />
        <input
          className="state"
          type="text"
          name="generatorState"
          placeholder="State"
          value={getInputValue("generatorState")}
        />
        <input
          className="zip"
          type="text"
          name="generatorZip"
          placeholder="Zip"
          value={getInputValue("generatorZip")}
        />
      </div>
      <input
        type="text"
        name="generatorContactName"
        placeholder="Contact Name"
        value={getInputValue("generatorContactName")}
      />
      <input
        type="text"
        name="generatorPhone"
        placeholder="Phone"
        value={getInputValue("generatorPhone")}
      />
      <input
        type="text"
        name="poNumber"
        placeholder="PO Number"
        value={getInputValue("poNumber")}
      />
    </section>
  );
};

Generator.propTypes = {};

export default Generator;
