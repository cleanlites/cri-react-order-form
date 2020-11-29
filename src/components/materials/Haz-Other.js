import React from "react";
import PropTypes from "prop-types";
import {
  OtherInput as Other,
  ControlledMaterialInput as Cont,
} from "../inputs/MaterialInput";

const HazOther = (props) => {
  return (
    <div className="container form-values">
      <div className="row">
        <div className="col-md-12  px-0">
          <div className="material-holder">
            <div className="material">
              <material id="haz">
                <div className="divide">
                  <h2>
                    <i className="fas fa-radiation-alt"></i> Haz / Other
                  </h2>
                  <span></span>
                </div>
                <div className="row">
                  <div className="col-md-6 ">
                    <Cont
                      key="HG_devices"
                      name="HG_devices"
                      dName="Mercury Devices"
                    />

                    <Cont
                      name="HG_fixtures"
                      key="HG_fixtures"
                      dName="Fixtures"
                    />

                    <Cont key="HG_toners" name="HG_toners" dName="Toners" />
                  </div>

                  <div className="col-md-6 ">
                    <Other key="HG_other1" name="HG_other1" dName="Other 1" />

                    <Other key="HG_other2" name="HG_other2" dName="Other 2" />

                    <Other key="HG_other3" name="HG_other3" dName="Other 3" />

                    <Other key="HG_other4" name="HG_other4" dName="Other 4" />
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

export default HazOther;
