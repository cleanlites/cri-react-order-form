import React from "react";
import PropTypes from "prop-types";
import {
  OtherInput as Other,
  ControlledMaterialInput as Cont,
} from "../inputs/MaterialInput";

const Specialty = (props) => {
  return (
    <div className="container form-values">
      <div className="row">
        <div className="col-md-12  px-0">
          <div className="material-holder">
            <div className="material">
              <material id="specialty">
                <div className="divide">
                  <h2>
                    <i className="fas fa-charging-station"></i> Specialty
                  </h2>
                  <span></span>
                </div>
                <div className="row">
                  <div className="col-md-12 ">
                    <Cont
                      key="special_airbag"
                      name="special_airbag"
                      dName="Airbag"
                    />

                    <Cont
                      key="special_solarPanels"
                      name="special_solarPanels"
                      dName="Solar Panels"
                    />
                    <Cont
                      key="special_seatbeltPretensioners"
                      name="special_seatbeltPretensioners"
                      dName="Seatbelt Pretensioners"
                    />
                  </div>
                  <div
                    className="col-md-12"
                    style={{
                      margin: "auto",
                      marginTop: "2rem",
                      textAlign: "center",
                      maxWidth: "300px",
                      color: "var(--cri-error)",
                    }}
                  >
                    <p>
                      * If you have other exotic or hard-to recycle items, there
                      is a section at the end to add notes.
                    </p>
                  </div>
                </div>
              </material>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Specialty.propTypes = {};

export default Specialty;
