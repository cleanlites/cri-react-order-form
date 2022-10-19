import React from "react";
import PropTypes from "prop-types";

const Material = ({ getInputValue, getUnits, setInputValue }) => {
  const getRenderedValue = (name) => {
    if (getInputValue(name) === "") {
      return "";
    }
    return `${getInputValue(name)} ${getUnits(name)}`;
  };
  return (
    <section className="section--material" data-name="materials">
      <div className="material-section--title" data-name="Materials">
        Materials
      </div>

      <div className="material--lamps" data-name="Lamps">
        <div className="material--title">
          <h3>Lamps</h3>
        </div>
        <label>4ft & Under</label>
        <input
          readOnly
          type="text"
          name="4ftUnder"
          value={getRenderedValue("4ftUnder")}
          // onChange={(e) => setInputValue(e.target)}
          // placeholder={getRenderedValue("4ftUnder")}
        />
        <label>8ft & Over</label>
        <input
          readOnly
          type="text"
          name="8ftOver"
          value={getRenderedValue("8ftOver")}
        />
        <label>CFL</label>
        <input
          readOnly
          type="text"
          name="CFL"
          value={getRenderedValue("CFL")}
        />
        <label>Incandescent</label>
        <input
          readOnly
          type="text"
          name="incandescent"
          value={getRenderedValue("incandescent")}
        />
        <label>U-Bend</label>
        <input
          readOnly
          type="text"
          name="uBend"
          value={getRenderedValue("uBend")}
        />
        <label>HIDs</label>
        <input
          readOnly
          type="text"
          name="HIDs"
          value={getRenderedValue("HIDs")}
        />
        <label>LEDs</label>
        <input
          readOnly
          type="text"
          name="LEDs"
          value={getRenderedValue("lamps__led")}
        />
        <label>Other</label>
        <input
          readOnly
          type="text"
          name="lampsOther"
          value={getRenderedValue("lampsOther")}
        />
      </div>
      <div className="material--ballast" data-name="Ballast">
        <div className="material--title">
          <h3>Ballast</h3>
        </div>
        <label>
          <span>Ballasts</span>
        </label>
        <input
          readOnly
          type="text"
          name="ballast_ballasts"
          value={getRenderedValue("ballast_ballasts")}
        />
        <label>Capacitors</label>
        <input
          readOnly
          type="text"
          name="ballasts_capacitors"
          value={getRenderedValue("ballasts_capacitors")}
        />
        <label>
          <span>Other 1</span>
        </label>
        <input
          readOnly
          type="text"
          name="ballast_other1"
          value={getRenderedValue("ballast_other1")}
        />
        <label>Other 2</label>
        <input
          readOnly
          type="text"
          name="ballast_other2"
          value={getRenderedValue("ballast_other2")}
        />
      </div>

      <div className="material--batteries" data-name="Batteries">
        <div className="material--title">
          <h3>Batteries</h3>
        </div>
        <label>
          <span>Nickel Cadmium</span>
        </label>
        <input
          readOnly
          type="text"
          name="batteries_niCad"
          value={getRenderedValue("batteries_niCad")}
        />
        <label>Nickel Metal Hydride</label>
        <input
          readOnly
          type="text"
          name="batteries_niMh"
          value={getRenderedValue("batteries_niMh")}
        />
        <label>Alkaline</label>
        <input
          readOnly
          type="text"
          name="batteries_alkaline"
          value={getRenderedValue("batteries_alkaline")}
        />
        <label>Zinc Carbon</label>
        <input
          readOnly
          type="text"
          name="batteries_zincCarbon"
          value={getRenderedValue("batteries_zincCarbon")}
        />
        <label>
          <span>Zinc Air</span>
        </label>
        <input
          readOnly
          type="text"
          name="batteries_zincAir"
          value={getRenderedValue("batteries_zincAir")}
        />
        <label>Lead Acid Dry Cell</label>
        <input
          readOnly
          type="text"
          name="batteries_leadAcidDry"
          value={getRenderedValue("batteries_leadAcidDry")}
        />
        <label>Lead Acid Wet Cell</label>
        <input
          readOnly
          type="text"
          name="batteries_leadAcidWet"
          value={getRenderedValue("batteries_leadAcidWet")}
        />
        <label>Mercury</label>
        <input
          readOnly
          type="text"
          name="batteries_mercury"
          value={getRenderedValue("batteries_mercury")}
        />
        <label>Button Cell</label>
        <input
          readOnly
          type="text"
          name="batteries_buttonCell"
          value={getRenderedValue("batteries_buttonCell")}
        />
        <label>Lithium</label>
        <input
          readOnly
          type="text"
          name="batteries_lithium"
          value={getRenderedValue("batteries_lithium")}
        />
        <label>Lithium Ion</label>
        <input
          readOnly
          type="text"
          name="batteries_lithiumIon"
          value={getRenderedValue("batteries_lithiumIon")}
        />
        <label>Magnesium</label>
        <input
          readOnly
          type="text"
          name="batteries_magnesium"
          value={getRenderedValue("batteries_magnesium")}
        />
        <label>Co-Mingled</label>
        <input
          readOnly
          type="text"
          name="batteries_coMingled"
          value={getRenderedValue("batteries_coMingled")}
        />
        <label>Other 1</label>
        <input
          readOnly
          type="text"
          name="batteries_other1"
          value={getRenderedValue("batteries_other1")}
        />
        <label>Other 2</label>
        <input
          readOnly
          type="text"
          name="batteries_other2"
          value={getRenderedValue("batteries_other2")}
        />
      </div>
      <div className="material--eWaste" data-name="eWaste">
        <div className="material--title">
          <h3>eWaste</h3>
        </div>

        <label>
          <span>Monitors</span>
        </label>
        <input
          readOnly
          type="text"
          name="monitors"
          value={getRenderedValue("monitors")}
        />
        <label>Keyboards</label>
        <input
          readOnly
          type="text"
          name="keyboards"
          value={getRenderedValue("keyboards")}
        />
        <label>Hard Drives</label>
        <input
          readOnly
          type="text"
          name="hardDrives"
          value={getRenderedValue("hardDrives")}
        />
        <label>Printers</label>
        <input
          readOnly
          type="text"
          name="printers"
          value={getRenderedValue("printers")}
        />
        <label>Other 1</label>
        <input
          readOnly
          type="text"
          name="electronicsOther1"
          value={getRenderedValue("electronicsOther1")}
        />
        <label>Other 2</label>
        <input
          readOnly
          type="text"
          name="electronicsOther2"
          value={getRenderedValue("electronicsOther2")}
        />
      </div>
      <div className="material--specialty" data-name="Specialty">
        <div className="material--title">
          <h3>Specialty</h3>
        </div>
        <label>
          <span>Airbag Devices</span>
        </label>
        <input
          readOnly
          type="text"
          name="special_airbag"
          value={getRenderedValue("special_airbag")}
        />
        <label>Seatbelt Pretensioner</label>
        <input
          readOnly
          type="text"
          name="special_seatbeltPretensioners"
          value={getRenderedValue("special_seatbeltPretensioners")}
        />
        <label>Solar Panels</label>
        <input
          readOnly
          type="text"
          name="special_solarPanels"
          value={getRenderedValue("special_solarPanels")}
        />
      </div>
      <div className="material--haz" data-name="Hazardous">
        <div className="material--title">
          <h3>Hazardous / Other</h3>
        </div>
        <label>
          <span>HG Devices</span>
        </label>
        <input
          readOnly
          type="text"
          name="HG_devices"
          value={getRenderedValue("HG_devices")}
        />
        <label>Fixtures</label>
        <input
          readOnly
          type="text"
          name="HG_fixtures"
          value={getRenderedValue("HG_fixtures")}
        />
        <label>Toners</label>
        <input
          readOnly
          type="text"
          name="HG_toners"
          value={getRenderedValue("HG_toners")}
        />
        <label>Transformers</label>
        <input
          readOnly
          type="text"
          name="HG_transformers"
          value={getRenderedValue("HG_transformers")}
        />
        <label>PCB Containing</label>
        <input
          readOnly
          type="text"
          name="HG_pcbContaining"
          value={getRenderedValue("HG_pcbContaining")}
        />
        <label>Other 1</label>
        <input
          readOnly
          type="text"
          name="HG_other1"
          value={getRenderedValue("HG_other1")}
        />
        <label>Other 2</label>
        <input
          readOnly
          type="text"
          name="HG_other2"
          value={getRenderedValue("HG_other2")}
        />
        <label>Other 3</label>
        <input
          readOnly
          type="text"
          name="HG_other3"
          value={getRenderedValue("HG_other3")}
        />
        <label>Other 4</label>
        <input
          readOnly
          type="text"
          name="HG_other4"
          value={getRenderedValue("HG_other4")}
        />
      </div>
    </section>
  );
};

Material.propTypes = {};

export default Material;
