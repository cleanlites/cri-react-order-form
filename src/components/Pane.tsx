import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext';

interface PaneProps {
  children: any;
  sectionTitle: String;
  componentOverride?: any;
}

const Pane = ({ children, sectionTitle, componentOverride }: PaneProps) => {
  const {
    appState,
    appState: { sections, current_pane },
  } = useContext(AppContext);

  const [isCurrent, setCurrent] = useState(false);

  useEffect(() => {
    let paneNo = sections[sectionTitle as any].pane;

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
          ? 'current-pane single-pane add-verify container'
          : 'single-pane add-verify container'
      }
    >
      <div className="title-of-section">
        {componentOverride ? <>{componentOverride}</> : <h2>{sectionTitle}</h2>}
      </div>
      {children}
    </div>
  );
};

export default Pane;
