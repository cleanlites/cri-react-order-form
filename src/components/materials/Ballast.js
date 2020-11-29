import React from "react";
import PropTypes from "prop-types";
import {
  OtherInput as Other,
  ControlledMaterialInput as Cont,
} from "../inputs/MaterialInput";

const Ballast = (props) => {
  return (
    <div className="container form-values">
      <div className="row">
        <div className="col-md-12  px-0">
          <div className="material-holder">
            <div className="material">
              <material id="ballast">
                <div className="divide">
                  <h2>
                    <i className="fas fa-bolt"></i> Ballast
                  </h2>
                  <span></span>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 ">
                    <Cont
                      verify
                      name="ballast_ballasts"
                      dName="Ballast"
                      key="ballast_ballasts"
                    />

                    <Cont
                      name="ballasts_capacitors"
                      dName="Capacitors"
                      key="ballasts_capacitors"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 ">
                    <Other name="ballast_other1" dName="Ballast Other 1" />
                    <Other name="ballast_other2" dName="Ballast Other 2" />
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

Ballast.propTypes = {};

export default Ballast;
