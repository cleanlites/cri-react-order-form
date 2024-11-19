import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext';
import MaterialSectionNode from './MaterialSectionNode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ProgressNodes = (props) => {
  const {
    goToPaneByClickingNode,
    appState: {
      sections,
      selectedMaterials,
      current_pane,
      materialSectionOpen,
      current_node,
    },
  } = useContext(AppContext);
  //selects only non-material sections

  const [nodePercent, calculatePercent] = useState('0%');
  const nonmat_sections = Object.keys(sections).filter(
    (s) => sections[s].isMaterial === false,
  );

  useEffect(() => {
    let result = '';
    let percent = 0;
    if (current_pane === 1) {
      result = '0%  ';
    }
    if (current_pane > 4 && current_pane < 11) {
      result = '60%';
    } else if (current_pane > 10) {
      percent = (100 * (current_pane - 7)) / 5;
      result = `${percent}%`;
    } else {
      percent = (100 * (current_pane - 1)) / 5;
      result = `${percent}%`;
    }
    calculatePercent(result);
  }, [current_pane]);

  const checkCurrent = (name) => {
    if (current_node === name) {
      if (name === 'Materials') {
        return 'current focused';
      } else return 'current';
    }
    return '';
  };

  return (
    <div className="progress-nodes">
      <div
        className="progress-nodes--completed"
        style={{ width: `${nodePercent}` }}
      ></div>
      <ul>
        {materialSectionOpen ? (
          <MaterialSectionNode />
        ) : (
          nonmat_sections.map((section) => (
            <li
              className={checkCurrent(sections[section].name)}
              key={sections[section].name}
              onClick={() => {
                goToPaneByClickingNode(sections[section].pane, section);
              }}
            >
              <div>
                {sections[section].isValid ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  ''
                )}
              </div>
              <a>
                <center>{sections[section].name} </center>
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProgressNodes;
