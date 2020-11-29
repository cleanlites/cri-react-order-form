import React, { useContext } from "react";
import Button from "./Button";
import { AppContext } from "../AppContext";
const BotttomNav = (props) => {
  const {
    nextPane,
    prevPane,
    appState: { formIsValid },
  } = useContext(AppContext);
  return (
    <div className="button--wrapper">
      <div className="button--section submit-form--button">
        <Button name="Previous" onClick={prevPane} />

        <Button name="Submit" />
        <Button name="Next" onClick={nextPane} />
      </div>
    </div>
  );
};

export default BotttomNav;
