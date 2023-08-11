import React, { Component } from "react";
import {
  OtherInput as Other,
  ControlledMaterialInput as Cont,
} from "../inputs/MaterialInput";

const Lamps = (props) => {
  return (
    <div className="container form-values">
      <div className="row">
        <div className="col-md-12  px-0">
          <div className="material-holder ">
            <div className="material">
              <section id="lamps">
                <div className="row">
                  <div className="col-md-6">
                    <Cont dName="4ft & Under" name="4ftUnder" key="4ftUnder" />
                    <Cont key="8ftOver" name="8ftOver" dName="8ft & Over" />
                    <Cont name="CFL" dName="CFL" key="CFL" />
                    <Cont
                      key="incandescent"
                      name="incandescent"
                      dName="Incandescent Bulbs"
                    />
                  </div>
                  <div className="col-md-6 ">
                    <Cont key="uBend" name="uBend" dName="U-Bend Bulbs" />
                    <Cont key="HIDs" name="HIDs" dName="HID Lamps" />
                    <Cont name="lamps__led" dName="LEDs" key="LEDs" />
                    <Other
                      dName="Lamps Other"
                      name="lampsOther"
                      key="lampsOther"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lamps;
