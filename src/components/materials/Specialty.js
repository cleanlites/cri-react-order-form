import React from "react";
import PropTypes from "prop-types";
import {
  OtherInput as Other,
  ControlledMaterialInput as Cont,
} from "../inputs/MaterialInput";

const Specialty = (props) => {
  return (
    <div class="container form-values">
      <div class="row">
        <div class="col-md-12  px-0">
          <div class="material-holder">
            <div class="material">
              <material id="specialty">
                <div class="divide">
                  <h2>
                    <i class="fas fa-charging-station"></i> Specialty
                  </h2>
                  <span></span>
                </div>
                <div class="row">
                  <div class="col-md-12 ">
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
