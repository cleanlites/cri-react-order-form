import React from "react";
import PropTypes from "prop-types";
import {
  OtherInput as Other,
  ControlledMaterialInput as Cont,
} from "../inputs/MaterialInput";

const Batteries = (props) => {
  return (
    <div className="container form-values">
      <div className="row">
        <div className="col-md-12  px-0">
          <div className="material-holder">
            <div className="material">
              <section id="batteries">
                <div className="row">
                  <div className="col-md-6 ">
                    <Cont
                      verify
                      key="batteries_niCad"
                      name="batteries_niCad"
                      dName="Nickel Cadmium"
                    />
                    <Cont
                      verify
                      key="batteries_niMh"
                      name="batteries_niMh"
                      dName="Nickel Metal Hydride"
                    />
                    <Cont
                      verify
                      key="batteries_alkaline"
                      name="batteries_alkaline"
                      dName="Alkaline"
                    />
                    <Cont
                      verify
                      key="batteries_zincCarbon"
                      name="batteries_zincCarbon"
                      dName="Zinc Carbon"
                    />
                    <Cont
                      verify
                      key="batteries_zincAir"
                      name="batteries_zincAir"
                      dName="Zinc Air"
                    />
                    <Cont
                      verify
                      key="batteries_leadAcidDry"
                      name="batteries_leadAcidDry"
                      dName="Lead Acid Dry Cell"
                    />
                    <Cont
                      verify
                      key="batteries_leadAcidWet"
                      name="batteries_leadAcidWet"
                      dName="Lead Acid Wet Cell"
                    />
                    <Cont
                      verify
                      key="batteries_mercury"
                      name="batteries_mercury"
                      dName="Mercury"
                    />
                  </div>
                  <div className="col-md-6 ">
                    <Cont
                      verify
                      key="batteries_buttonCell"
                      name="batteries_buttonCell"
                      dName="Button Cell"
                    />
                    <Cont
                      verify
                      key="batteries_lithium"
                      name="batteries_lithium"
                      dName="Lithium"
                    />
                    <Cont
                      verify
                      key="batteries_lithiumIon"
                      name="batteries_lithiumIon"
                      dName="Lithium Ion"
                    />
                    <Cont
                      verify
                      key="batteries_magnesium"
                      name="batteries_magnesium"
                      dName="Magnesium"
                    />
                    <Cont
                      verify
                      key="batteries_coMingled"
                      name="batteries_coMingled"
                      dName="Co-Mingled"
                    />
                    <Other
                      key="batteries_other1"
                      name="batteries_other1"
                      dName="Batteries Other 1"
                    />
                    <Other
                      key="batteries_other2"
                      name="batteries_other2"
                      dName="Batteries Other 2"
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

Batteries.propTypes = {};

export default Batteries;
