import React from "react";

const PaneHolder = ({ children, message }) => {
  return (
    <div className={"loading"}>
      <div className="title-of-section">
        <h2>{message}</h2>
      </div>
      {children}
    </div>
  );
};

PaneHolder.propTypes = {};

export default PaneHolder;
