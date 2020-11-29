import React, { useContext } from "react";
import MaterialCheckBox from "../materials/MaterialCheckBox";
import { AppContext } from "../../AppContext";
const Materials = (props) => {
  const {
    updateSelectedMaterials,
    appState: { materialSections },
  } = useContext(AppContext);

  return (
    <div className="container form-values material-picker--wrapper">
      <p>
        Pick as many materials as you need. You can always come back and change
        your needs
      </p>
      {Object.keys(materialSections).map((material) => (
        <MaterialCheckBox
          update={updateSelectedMaterials}
          key={material}
          materialName={material}
          selected={materialSections[material].selected}
        />
      ))}
    </div>
  );
};

export default Materials;
