import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export const MaterialInput = (props) => {
  return <div></div>;
};

export const OtherInput = ({ dName, name, placeholder }) => {
  const {
    setInputValue,
    appState: { inputs },
  } = useContext(AppContext);
  return (
    <React.Fragment>
      <div className="label-input-quantity other">
        <label className="bold-label">
          <span>{dName}</span>
        </label>
        <div className="input-wrapper">
          <input
            className="align-items-end withLabel"
            key={`value-input--${name}`}
            type="text"
            placeholder={placeholder ? placeholder : 'Please Describe'}
            // placeholder={name}
            name={name}
            value={inputs[name].value}
            onChange={(e) => setInputValue(e.target)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export const ControlledMaterialInput = ({
  dName,
  verify,
  placeholder,
  name,
}) => {
  const {
    setInputValue,
    setInputUnit,
    appState: { inputs },
  } = useContext(AppContext);

  const [selectedUnit, changeSelectedUnit] = useState('Units');

  useEffect(() => {
    setInputUnit(name, selectedUnit);
  }, [selectedUnit]);

  const handleControlledValue = (target) => {
    if (target.value.match(/^[0-9]*$/)) {
      setInputValue(target);
      return;
    } else {
      toast.error(
        'Please use only numbers, select your weight or units to the right'
      );
    }
  };
  return (
    <React.Fragment>
      <div className="label-input-quantity">
        <label className="bold-label">
          <span>{dName}</span>
        </label>
        <div className="input-wrapper">
          <input
            className="align-items-end withLabel"
            key={`value-input--${name}`}
            type="text"
            placeholder={placeholder ? placeholder : 'Est Quantity'}
            name={name}
            value={`${inputs[name].value}`}
            onChange={(e) => handleControlledValue(e.target)}
          />
          {verify ? <div className="verify"></div> : ''}
        </div>
        <div className="units--holder">
          <input
            type="checkbox"
            key={`unit-input--${name}`}
            id={`units--${name}`}
            name={`unit-type--${name}`}
            value={selectedUnit}
            onChange={() => {}}
            checked={selectedUnit === 'Lbs'}
          />

          <label
            onClick={() => {
              if (selectedUnit === 'Units') {
                changeSelectedUnit('Lbs');
              } else {
                changeSelectedUnit('Units');
              }
            }}
            htmlFor="units--batteries_niCad"
          >
            {selectedUnit}
          </label>
          <span></span>
        </div>
      </div>
    </React.Fragment>
  );
};

MaterialInput.propTypes = {};
