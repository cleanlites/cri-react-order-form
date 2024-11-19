import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCarBattery,
  faBolt,
  faPlug,
  faRadiationAlt,
  faLightbulb,
  faChargingStation,
} from '@fortawesome/free-solid-svg-icons';

const MaterialCheckBox = ({ materialName, selected, update }) => {
  const iconMap = {
    Batteries: faCarBattery,
    Ballast: faBolt,
    eWaste: faPlug,
    'Haz/Other': faRadiationAlt,
    Lamps: faLightbulb,
    Specialty: faChargingStation,
  };

  return (
    <div className="material-picker--selector">
      <input type="checkbox" id={materialName} checked={selected} readOnly />
      <label onClick={() => update(materialName)} htmlFor={materialName}>
        <h2 className="label-with-options">
          <i>
            <FontAwesomeIcon icon={iconMap[materialName]} />
          </i>
          {materialName}
        </h2>
        <span></span>
      </label>
    </div>
  );
};

export default MaterialCheckBox;
