import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

const Containers = () => {
  const { setInputValue, getInputValue } = useContext(AppContext);

  return (
    <div className="container form-values containers">
      <div className="row pt-4 container-box">
        <div className="col-lg-6 col-md-6 px-0 pl-sm-3 pl-xs-3">
          <label className="bold-label">4ft Boxes</label>
          <div style={{ width: "70%" }}>
            <input
              className="withLabel"
              type="text"
              name="containers_4ftBox"
              placeholder="Qty Needed"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("containers_4ftBox")}
            />
            <div
              style={{ transform: "translateX(15px)" }}
              className="verify"
            ></div>
          </div>

          <label className="bold-label">8ft Boxes</label>
          <div style={{ width: "70%" }}>
            <input
              className="withLabel"
              type="text"
              name="containers_8ftBox"
              placeholder="Qty Needed"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("containers_8ftBox")}
            />
            <div
              style={{ transform: "translateX(15px)" }}
              className="verify"
            ></div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 px-0 pl-sm-3 pl-xs-3">
          <label className="bold-label">U-bend Boxes</label>
          <div style={{ width: "70%" }}>
            <input
              className=" withLabel"
              type="text"
              name="containers_uBendBox"
              placeholder="Qty Needed"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("containers_uBendBox")}
            />
            <div
              style={{ transform: "translateX(15px)" }}
              className="verify"
            ></div>
          </div>
          <label className="bold-label">Cubic Yard Box</label>
          <div style={{ width: "70%" }}>
            <input
              className="withLabel"
              type="text"
              name="containers_gaylords"
              placeholder="Qty Needed"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("containers_gaylords")}
            />
            <div
              style={{ transform: "translateX(15px)" }}
              className="verify"
            ></div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 px-0 pl-md-3 pl-sm-3 pl-xs-3">
          <label className="bold-label">Small Batt Box</label>
          <div style={{ width: "70%" }}>
            <input
              className="withLabel"
              type="text"
              name="containers_smallBatteryBox"
              placeholder="Qty Needed"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("containers_smallBatteryBox")}
            />
            <div
              style={{ transform: "translateX(15px)" }}
              className="verify"
            ></div>
          </div>
          <label className="bold-label">55 Gallon Drum</label>
          <div style={{ width: "70%" }}>
            <input
              className="withLabel"
              type="text"
              name="containers_55GallonDrums"
              placeholder="Qty Needed"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("containers_55GallonDrums")}
            />
            <div
              style={{ transform: "translateX(15px)" }}
              className="verify"
            ></div>
          </div>
          <label className="bold-label">Poly Drums</label>
          <div style={{ width: "70%" }}>
            <input
              className="withLabel"
              type="text"
              name="containers_polyDrums"
              placeholder="Qty Needed"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("containers_polyDrums")}
            />
            <div
              style={{ transform: "translateX(15px)" }}
              className="verify"
            ></div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 px-0 pl-sm-3 pl-xs-3">
          <label className="bold-label">5 Gallon Pail</label>
          <div style={{ width: "70%" }}>
            <input
              className="withLabel"
              type="text"
              name="containers_5GallonPail"
              placeholder="Qty Needed"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("containers_5GallonPail")}
            />
            <div
              style={{ transform: "translateX(15px)" }}
              className="verify"
            ></div>
          </div>
          <label className="bold-label">Other 1</label>
          <div style={{ width: "70%" }}>
            <input
              className="withLabel"
              type="text"
              name="containers_other1"
              placeholder="Qty Needed"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("containers_other1")}
            />
            <div
              style={{ transform: "translateX(15px)" }}
              className="verify"
            ></div>
          </div>
          <label className="bold-label">Other 2</label>
          <div style={{ width: "70%" }}>
            <input
              className="withLabel"
              type="text"
              name="containers_other2"
              placeholder="Qty Needed"
              onChange={(e) => setInputValue(e.target)}
              value={getInputValue("containers_other2")}
            />
            <div
              style={{ transform: "translateX(15px)" }}
              className="verify"
            ></div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <input
          className="auto-next big-button-input"
          type="checkbox"
          name="no-containers"
          id="no-containers"
        />
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
