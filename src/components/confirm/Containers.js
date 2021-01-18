import React from "react";
import PropTypes from "prop-types";

const Containers = (props) => {
  return (
    <section class="section--containers" data-name="containers">
      <div class="section--title">Containers</div>
      <div class="container-fluid">
        <div class="row container--content">
          <div class="col-md-3 col-sm-6 px-0">
            <label>4ft Boxes</label>
            <input
              type="text"
              name="containers_4ftBox"
              placeholder="Qty Needed"
            />
            <label>8ft Boxes</label>
            <input
              type="text"
              name="containers_8ftBox"
              placeholder="Qty Needed"
            />
            <label>U-bend Boxes</label>
            <input
              type="text"
              name="containers_uBendBox"
              placeholder="Qty Needed"
            />
          </div>
          <div class="col-md-3 col-sm-6 px-0">
            <label>55 Gallon Drum</label>
            <input
              type="text"
              name="containers_55GallonDrums"
              placeholder="Qty Needed"
            />
            <label>Poly Drums</label>
            <input
              type="text"
              name="containers_polyDrums"
              placeholder="Qty Needed"
            />
            <label>5 Gallon Pail</label>
            <input
              type="text"
              name="containers_5GallonPail"
              placeholder="Qty Needed"
            />
          </div>
          <div class="col-md-3 col-sm-6 px-0">
            <label>Cubic Yard Box</label>
            <input
              type="text"
              name="containers_gaylords"
              placeholder="Qty Needed"
            />
            <label>Small Batt Box</label>
            <input
              type="text"
              name="containers_smallBatteryBox"
              placeholder="Qty Needed"
            />
          </div>

          <div class="col-md-3 col-sm-6 px-0">
            <label>Other 1</label>
            <input
              type="text"
              name="containers_other1"
              placeholder="Qty Needed"
            />
            <label>Other 2</label>
            <input
              type="text"
              name="containers_other2"
              placeholder="Qty Needed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Containers.propTypes = {};

export default Containers;
