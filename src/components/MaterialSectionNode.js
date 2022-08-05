import React, { useContext } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { AppContext } from "../AppContext";

const AllNodes = () => {
  const {
    goToPaneByClickingNode,
    appState: { sections, current_node, selectedMaterials },
  } = useContext(AppContext);

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

  const NodeArray = Object.keys(sections)
    .map((section) => {
      if (
        sections[section].isMaterial === false &&
        sections[section].isSelected
      ) {
        return (
          <li
            key={`material-node--${section}`}
            onClick={() => {
              goToPaneByClickingNode(sections[section].pane, section);
            }}
            className={checkCurrent(sections[section].name)}
          >
            <div>
              {sections[section].isValid ? (
                <i className="fas fa-check"></i>
              ) : (
                ""
              )}
            </div>
            <a>{section}</a>
          </li>
        );
      }
    })
    .filter((nde) => nde);

  NodeArray.splice(
    4,
    0,
    <ul
      key={`sub-item-node`}
      className={`sub-item--ul focused`}
      style={calcWidth}
    >
      {selectedMaterials.map((mat) => (
        <li
          key={`sub-item--${mat}`}
          onClick={() => {
            goToPaneByClickingNode(sections[mat].pane, mat);
          }}
          className={`sub-item ${current_node === mat ? "current" : ""}`}
        >
          <a>{mat}</a>
        </li>
      ))}
    </ul>,
  );
  return NodeArray;
};

const MaterialSectionNode = (props) => {
  return (
    <React.Fragment>
      <AllNodes />
    </React.Fragment>
  );
};

export default MaterialSectionNode;
