import React, { useContext, useEffect, useState } from "react";
import MaterialCheckBox from "../materials/MaterialCheckBox";
import { AppContext } from "../../AppContext";
const Materials = (props) => {
  const {
    updateSelectedMaterials,
    clearAllMaterial,
    setValid,
    appState: { materialSections, selectedMaterials },
  } = useContext(AppContext);

  const [noMaterials, setNoMaterials] = useState(false);
  // useEffect(() => {
  //   if (selectedMaterials.length > 0 && noMaterials) {
  //     if (noMaterials) {
  //       setNoMaterials(false);
  //     }
  //   }
  // }, [selectedMaterials]);
  const handleUpdateSelectedMaterials = (e) => {
    if (noMaterials) {
      setNoMaterials(false);
    }

    updateSelectedMaterials(e);
  };
  const handleSetNoMaterials = () => {
    setNoMaterials(!noMaterials);
    if (!noMaterials && selectedMaterials.length > 0) {
      clearAllMaterial();
    }
    setValid("Materials", true);
  };
  return (
    <>
      <div className="container form-values material-picker--wrapper">
        <p>
          Pick as many materials as you need. You can always come back and
          change your needs
        </p>
        {Object.keys(materialSections).map((material) => (
          <MaterialCheckBox
            key={`checkbox-material--${material}`}
            update={handleUpdateSelectedMaterials}
            key={material}
            materialName={material}
            selected={materialSections[material].selected}
          />
        ))}
      </div>
      <div className="col-md-12">
        <input
          readOnly
          checked={noMaterials}
          className="auto-next big-button-input"
          type="checkbox"
          name="no-materials"
          id="no-materials"
        />
        <div className="big-button">
          <label for="no-materials" onClick={handleSetNoMaterials}>
            <i className="fas fa-hand-pointer"></i> I just need containers.
          </label>
        </div>
      </div>
    </>
  );
};

export default Materials;
