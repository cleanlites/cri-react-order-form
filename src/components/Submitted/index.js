import React, { useContext } from "react";
import Header from "../Header";
import PaneHolder from "./PaneHolder";
import CompleteNode from "./CompleteNode";

import SuccessPane from "./SuccessPane";

const Submitted = ({ name }) => {
  return (
    <div className="container-fluid px-0 main-form">
      <div className="row main-row">
        <div className="main-block mt-3">
          <Header />
          <CompleteNode />
          <PaneHolder
            key="pane-holder--Order"
            message={"Submitted!"}
            children={<SuccessPane name={name ?? "User"} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Submitted;
