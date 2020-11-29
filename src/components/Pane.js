import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";

const Pane = ({ children, sectionTitle }) => {
  const {
    goToPane,
    appState,
    appState: {
      sections,
      selectedMaterials,
      materialsSelected,
      current_node,
      current_pane,
    },
  } = useContext(AppContext);

  const [isCurrent, setCurrent] = useState(false);

  useEffect(() => {
    let paneNo = sections[sectionTitle].pane;

    if (paneNo === current_pane) {
      setCurrent(true);
    } else {
      setCurrent(false);
    }
  }, [appState]);
  return (
    <div
      className={
        isCurrent
          ? "current-pane single-pane add-verify container"
          : "single-pane add-verify container"
      }
    >
      <div className="title-of-section">
        <h2>
          {sectionTitle}
          {isCurrent}
        </h2>
      </div>
      {children}
    </div>
  );
};

export default Pane;
