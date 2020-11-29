import React from 'react';

const Containers = () => {
    return (
        <div className="container form-values containers">
            <div className="row pt-4 container-box">
              <div className="col-lg-6 col-md-6 px-0 pl-sm-3 pl-xs-3">
                <label className="bold-label">4ft Boxes</label>
                <input className="withLabel" type="text" name="containers_4ftBox" placeholder="Qty Needed"/>
                <label className="bold-label">8ft Boxes</label>
                <input className="withLabel" type="text" name="containers_8ftBox" placeholder="Qty Needed"/>
              </div>
              <div className="col-lg-6 col-md-6 px-0 pl-sm-3 pl-xs-3">
                <label className="bold-label">U-bend Boxes</label>
                <input className=" withLabel" type="text" name="containers_uBendBox" placeholder="Qty Needed"/>
                <label className="bold-label">Cubic Yard Box</label>
                <input className="withLabel" type="text" name="containers_gaylords" placeholder="Qty Needed"/>
              </div>
              <div className="col-lg-6 col-md-6 px-0 pl-md-3 pl-sm-3 pl-xs-3">
                <label className="bold-label">Small Batt Box</label>
                <input className="withLabel" type="text" name="containers_smallBatteryBox" placeholder="Qty Needed"/>
                <label className="bold-label">55 Gallon Drum</label>
                <input className="withLabel" type="text" name="containers_55GallonDrums" placeholder="Qty Needed"/>
                <label className="bold-label">Poly Drums</label>
                <input className="withLabel" type="text" name="containers_polyDrums" placeholder="Qty Needed"/>
              </div>
              <div className="col-lg-6 col-md-6 px-0 pl-sm-3 pl-xs-3">
                <label className="bold-label">5 Gallon Pail</label>
                <input className="withLabel" type="text" name="containers_5GallonPail" placeholder="Qty Needed"/>
                <label className="bold-label">Other 1</label>
                <input className="withLabel" type="text" name="containers_other1" placeholder="Qty Needed"/>
                <label className="bold-label">Other 2</label>
                <input className="withLabel" type="text" name="containers_other2" placeholder="Qty Needed"/>
              </div>
            </div>
            <div className="col-md-12">
              <input className="auto-next big-button-input" type="checkbox" name="no-containers" id="no-containers"/>
              <div className="big-button">
                <label for="no-containers">
                  <i className="fas fa-hand-pointer"></i> I don't need any containers
                </label>
              </div>
            </div>
          </div>
    );
};



export default Containers;
