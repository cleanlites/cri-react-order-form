import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const MaterialSectionNode = (props) => {
  const {
    goToPaneByClickingNode,
    appState: {
      sections,
      selectedMaterials,
      materialSectionOpen,
      current_node,
    },
  } = useContext(AppContext);

  const nonmat_sections = Object.keys(sections).filter(
    (s) => sections[s].isMaterial === false
  );

  const materialSections = Object.keys(sections).filter(
    (s) => sections[s].isMaterial === true
  );

  const checkCurrent = (name) => {
    if (name === "Materials") {
      return "current focused";
    } else if (current_node === name) {
      return "current";
    } else return "";
  };

  const computePercent = () => {
    return selectedMaterials.length * 10;
  };
  const calcWidth = { width: computePercent() + "%" };

  const Nodes = () => {
    let nodeArray = [];
    Object.keys(sections).map((section) => {
      if (
        sections[section].isMaterial === false &&
        sections[section].isSelected
      ) {
        nodeArray.push(
          <li
            key={`material-node--${section}`}
            onClick={() => {
              goToPaneByClickingNode(sections[section].pane, section);
            }}
            className={checkCurrent(sections[section].name)}
          >
            <div></div>
            <a>{section}</a>
          </li>
        );
      }
    });
    {
      nodeArray.splice(
        4,
        0,
        <ul
          key={`sub-item-node`}
          className={`sub-item--ul focused`}
          style={calcWidth}
        >
          {selectedMaterials.map((mat) => (
            <li
              onClick={() => {
                goToPaneByClickingNode(sections[mat].pane, mat);
              }}
              className={`sub-item ${current_node === mat ? "current" : ""}`}
            >
              <a>{mat}</a>
            </li>
          ))}
        </ul>
      );
    }
    return nodeArray;
  };

  return (
    <React.Fragment>
      <Nodes />
    </React.Fragment>
  );
};

export default MaterialSectionNode;
