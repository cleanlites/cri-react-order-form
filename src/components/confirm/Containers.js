import React from "react";
import PropTypes from "prop-types";

const Containers = ({ getInputValue, setInputValue }) => {
  return (
    <section class="section--containers" data-name="containers">
      <div class="section--title">Containers</div>
      <div class="container-fluid">
        <div class="row container--content">
          <div class="col-md-3 col-sm-6 px-0">
            <label>4ft Boxes</label>
            <input
              readOnly
              type="text"
              name="containers_4ftBox"
              placeholder="Qty Needed"
              value={getInputValue("containers_4ftBox")}
            />
            <label>8ft Boxes</label>
            <input
              readOnly
              type="text"
              name="containers_8ftBox"
              placeholder="Qty Needed"
              value={getInputValue("containers_8ftBox")}
            />
            <label>U-bend Boxes</label>
            <input
              readOnly
              type="text"
              name="containers_uBendBox"
              placeholder="Qty Needed"
              value={getInputValue("containers_uBendBox")}
            />
          </div>
          <div class="col-md-3 col-sm-6 px-0">
            <label>55 Gallon Drum</label>
            <input
              readOnly
              type="text"
              name="containers_55GallonDrums"
              placeholder="Qty Needed"
              value={getInputValue("containers_55GallonDrums")}
            />
            <label>Poly Drums</label>
            <input
              readOnly
              type="text"
              name="containers_polyDrums"
              placeholder="Qty Needed"
              value={getInputValue("containers_polyDrums")}
            />
            <label>5 Gallon Pail</label>
            <input
              readOnly
              type="text"
              name="containers_5GallonPail"
              placeholder="Qty Needed"
              value={getInputValue("containers_5GallonPail")}
            />
          </div>
          <div class="col-md-3 col-sm-6 px-0">
            <label>Cubic Yard Box</label>
            <input
              readOnly
              type="text"
              name="containers_gaylords"
              placeholder="Qty Needed"
              value={getInputValue("containers_gaylords")}
            />
            <label>Small Batt Box</label>
            <input
              readOnly
              type="text"
              name="containers_smallBatteryBox"
              placeholder="Qty Needed"
              value={getInputValue("containers_smallBatteryBox")}
            />
          </div>

          <div class="col-md-3 col-sm-6 px-0">
            <label>Other 1</label>
            <input
              readOnly
              type="text"
              name="containers_other1"
              placeholder="Qty Needed"
              value={getInputValue("containers_other1")}
            />
            <label>Other 2</label>
            <input
              readOnly
              type="text"
              name="containers_other2"
              placeholder="Qty Needed"
              value={getInputValue("containers_other2")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Containers.propTypes = {};

export default Containers;
