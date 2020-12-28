import React, { useContext } from "react";
import Button from "./Button";
import { AppContext } from "../AppContext";
import { toast } from "react-toastify";
const BotttomNav = (props) => {
  const {
    nextPane,
    prevPane,
    submitForm,
    appState: { formIsValid },
  } = useContext(AppContext);
  return (
    <div className="button--wrapper">
      <div className="button--section submit-form--button">
        <Button name="Previous" onClick={prevPane} valid />

        <Button
          valid={formIsValid}
          name="Submit"
          onClick={() => {
            if (formIsValid) {
              submitForm();
            } else {
              toast.error("Form not complete yet!");
            }
          }}
        />
        <Button name="Next" onClick={nextPane} valid />
      </div>
    </div>
  );
};

export default BotttomNav;
