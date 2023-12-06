import React, { useContext, useEffect, useState } from 'react';
import MaterialCheckBox from '../materials/MaterialCheckBox';
import { AppContext } from '../../AppContext';
const Materials = (props) => {
  const {
    updateSelectedMaterials,
    clearAllMaterial,
    setValid,
    nextPane,
    appState: { materialSections, selectedMaterials },
  } = useContext(AppContext);

  const [noMaterials, setNoMaterials] = useState(false);

  // const checkValid = () => {
  //   if (selectedMaterials.length > 0) {
  //     setValid("Materials", true);
  //   } else if (selectedMaterials.length === 0 && !noMaterials) {
  //     setValid("Materials", false);
  //   }
  // };
  // //check valid once when it loads in case someone is coming back to it
  // useEffect(() => {
  //   checkValid();
  // }, []);
  // useEffect(() => {
  //   checkValid();
  // }, [selectedMaterials, noMaterials]);

  const handleUpdateSelectedMaterials = (e) => {
    if (noMaterials) {
      setNoMaterials(false);
    }
    updateSelectedMaterials(e);
  };

  const handleContainersOnly = async () => {
    setNoMaterials(!noMaterials);
    // if (!noMaterials && selectedMaterials.length > 0) {
    //   await clearAllMaterial();
    // }
    setValid('Materials', true);
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
          <label htmlFor="no-materials" onClick={handleContainersOnly}>
            <i className="fas fa-hand-pointer"></i> I just need containers.
          </label>
        </div>
      </div>
    </>
  );
};

export default Materials;
