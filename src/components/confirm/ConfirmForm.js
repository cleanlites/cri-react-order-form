import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./style-rendered.css";
import Billing from "./Billing";
import Generator from "./Generator";
import Material from "./Material";
import Containers from "./Containers";
import SiteInfo from "./SiteInfo";
import { AppContext } from "../../AppContext";
const ConfirmForm = () => {
  const {
    submitTheForm,
    getInputValue,
    setInputValue,
    getUnits,
    setConfirming,
    appState: { receivingHours, materialSections },
  } = useContext(AppContext);
  return (
    <React.Fragment>
      <main id="rendered">
        <div className="main-form">
          <form action="#" method="POST">
            <section className="section--header" data-name="header">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 d-none d-sm-block">
                    <div className="logo-holder"></div>
                  </div>
                  <div className="col-md-6">
                    <div className="form--header">
                      <h3 className="confirm">Confirm Your Order</h3>
                      <h3 style={{ color: "var(--cri-green)" }}>
                        {getInputValue("CleanlitesFacility")}
                      </h3>
                      <p>www.cleanlites.com | p. 513-641-4155</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="container-fluid">
              <div className="row">
                <Billing
                  getInputValue={getInputValue}
                  setInputValue={setInputValue}
                />
                <Generator
                  getInputValue={getInputValue}
                  setInputValue={setInputValue}
                />
                <Material />
                <Containers
                  getInputValue={getInputValue}
                  setInputValue={setInputValue}
                />
                <SiteInfo
                  getInputValue={getInputValue}
                  setInputValue={setInputValue}
                />
              </div>
            </div>
          </form>
        </div>
      </main>
      <section className="rendered-section__submit">
        <button id="go-back" onClick={() => setConfirming(false)}>
          Edit My Order
        </button>
        <button id="submit-form" onClick={() => submitTheForm()}>
          Submit
        </button>
      </section>
    </React.Fragment>
  );
};

ConfirmForm.propTypes = {};

export default ConfirmForm;
