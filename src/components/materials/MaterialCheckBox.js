import React from "react";

const MaterialCheckBox = ({ materialName, selected, update }) => {
  const iconMap = {
    Batteries: "fas fa-car-battery",
    Ballast: "fas fa-bolt",
    eWaste: "fas fa-plug",
    "Haz/Other": "fas fa-radiation-alt",
    Lamps: "fas fa-lightbulb",
    Specialty: "fas fa-charging-station",
  };

  return (
    <div className="material-picker--selector">
      <input
        type="checkbox"
        id={materialName}
        checked={selected}
        onClick={() => update(materialName)}
      />
      <label for={materialName}>
        <h2>
          <i className={iconMap[materialName]}></i>
          {materialName}
        </h2>
        <span></span>
      </label>
    </div>
  );
};

export default MaterialCheckBox;
