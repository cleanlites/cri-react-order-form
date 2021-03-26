import React, { useContext } from "react";
import Button from "./Button";
import { AppContext } from "../AppContext";
import { toast } from "react-toastify";
const BotttomNav = (props) => {
  const {
    nextPane,
    prevPane,
    goToConfirm,
    appState: { formIsValid },
  } = useContext(AppContext);
  return (
    <div className="button--wrapper">
      <div className="button-section  submit-form--button">
        <Button
          id="btn-prev"
          name="Previous"
          onClick={prevPane}
          disabled={false}
        />

        <Button
          id="btn-submit"
          className={!formIsValid ? "greyed-out" : ""}
          name="Finalize"
          onClick={() => {
            if (formIsValid) {
              goToConfirm();
            } else {
              toast.error("Form not complete yet!");
            }
          }}
        />
        <Button id="btn-next" name="Next" onClick={nextPane} disabled={false} />
      </div>
    </div>
  );
};

export default BotttomNav;
