import React from "react";
import PropTypes from "prop-types";

const Tester = ({ appState }) => {
  return (
    <div style={{ height: "50px", width: "100%", color: "white" }}>
      <div style={{ display: "inline", margin: "1rem" }}>
        Current Pane: {appState.current_pane}
      </div>
      <div style={{ display: "inline", margin: "1rem" }}>
        Current Node: {JSON.stringify(appState.sections[appState.current_node])}
      </div>
      <div style={{ display: "inline", margin: "1rem" }}>
        Current Mat Pane: {appState.currentMaterialPane}
      </div>
      <div style={{ display: "inline", margin: "1rem" }}>
        Material Section Open: {appState.materialSectionOpen ? "Yed" : "No"}
      </div>
      <div style={{ display: "inline", margin: "1rem" }}>
        Selected Materials: {JSON.stringify(appState.selectedMaterials)}
      </div>
      <div style={{ display: "inline", margin: "1rem" }}>
        Current Node is Material:{" "}
        {appState.current_node.isMaterial ? "yes" : "no"}
      </div>
    </div>
  );
};

export default Tester;
