import React from "react";
import PropTypes from "prop-types";
import {
  OtherInput as Other,
  ControlledMaterialInput as Cont,
} from "../inputs/MaterialInput";

const EWaste = (props) => {
  return (
    <div className="container form-values">
      <div className="row">
        <div className="col-md-12  px-0">
          <div className="material-holder ">
            <div className="material">
              <material id="ewaste">
                <div className="divide">
                  <h2>
                    <i className="fas fa-plug"></i> eWASTE
                  </h2>
                  <span></span>
                </div>
                <div className="row">
                  <div className="col-md-6 ">
                    <Cont
                      key="monitors"
                      name="monitors"
                      dName="Computer Monitors"
                    />

                    <Cont key="keyboards" name="keyboards" dName="Keyboards" />

                    <Cont
                      key="hardDrives"
                      name="hardDrives"
                      dName="Hard Drives"
                    />

                    {/* <Cont
                      key="ewaste_towers"
                      name="ewaste_towers"
                      dName="CPU Towers"
                    /> */}

                    {/* <Cont
                      key="ewaste_servers"
                      name="ewaste_servers"
                      dName="Servers"
                    /> */}
                  </div>

                  <div className="col-md-6">
                    {/* <Cont
                      key="ewaste_modems"
                      name="ewaste_modems"
                      dName="Modems"
                    /> */}

                    {/* <Cont
                        key="ewaste_laptops"
                        name="ewaste_laptops"
                        dName="Laptops"
                      /> */}

                    <Cont key="printers" name="printers" dName="Printers" />

                    <Other
                      key="electronicsOther1"
                      name="electronicsOther1"
                      dName="Other 1"
                    />

                    <Other
                      key="electronicsOther2"
                      name="electronicsOther2"
                      dName="Other 2"
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

export default EWaste;
