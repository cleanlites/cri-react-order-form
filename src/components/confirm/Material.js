import React from "react";
import PropTypes from "prop-types";

const Material = ({ getInputValue }) => {
  return (
    <section className="section--material" data-name="materials">
      <div className="material-section--title" data-name="Materials">
        Materials
      </div>

      <div className="material--lamps" data-name="Lamps">
        <div className="material--title">
          <h3>Lamps</h3>
        </div>
        <label>
          <span>4ft & Under</span>
        </label>
        <input type="text" name="4ftUnder" value={getInputValue("4ftUnder")} />
        <label>8ft & Over</label>
        <input type="text" name="8ftOver" value={getInputValue("8ftOver")} />
        <label>CFL</label>
        <input type="text" name="CFL" value={getInputValue("CFL")} />
        <label>Incandescent</label>
        <input
          type="text"
          name="incandescent"
          value={getInputValue("incandescent")}
        />
        <label>U-Bend</label>
        <input type="text" name="uBend" value={getInputValue("uBend")} />
        <label>HIDs</label>
        <input type="text" name="HIDs" value={getInputValue("HIDs")} />
        <label>LEDs</label>
        <input type="text" name="LEDs" value={getInputValue("lamps__led")} />
        <label>Other</label>
        <input
          type="text"
          name="lampsOther"
          value={getInputValue("lampsOther")}
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
          type="text"
          name="ballast_ballasts"
          value={getInputValue("ballast_ballasts")}
        />
        <label>Capacitors</label>
        <input
          type="text"
          name="ballasts_capacitors"
          value={getInputValue("ballasts_capacitors")}
        />
        <label>
          <span>Other 1</span>
        </label>
        <input
          type="text"
          name="ballast_other1"
          value={getInputValue("ballast_other1")}
        />
        <label>Other 2</label>
        <input
          type="text"
          name="ballast_other2"
          value={getInputValue("ballast_other2")}
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
          type="text"
          name="batteries_niCad"
          value={getInputValue("batteries_niCad")}
        />
        <label>Nickel Metal Hydride</label>
        <input
          type="text"
          name="batteries_niMh"
          value={getInputValue("batteries_niMh")}
        />
        <label>Alkaline</label>
        <input
          type="text"
          name="batteries_alkaline"
          value={getInputValue("batteries_alkaline")}
        />
        <label>Zinc Carbon</label>
        <input
          type="text"
          name="batteries_zincCarbon"
          value={getInputValue("batteries_zincCarbon")}
        />
        <label>
          <span>Zinc Air</span>
        </label>
        <input
          type="text"
          name="batteries_zincAir"
          value={getInputValue("batteries_zincAir")}
        />
        <label>Lead Acid Dry Cell</label>
        <input
          type="text"
          name="batteries_leadAcidDry"
          value={getInputValue("batteries_leadAcidDry")}
        />
        <label>Lead Acid Wet Cell</label>
        <input
          type="text"
          name="batteries_leadAcidWet"
          value={getInputValue("batteries_leadAcidWet")}
        />
        <label>Mercury</label>
        <input
          type="text"
          name="batteries_mercury"
          value={getInputValue("batteries_mercury")}
        />
        <label>Button Cell</label>
        <input
          type="text"
          name="batteries_buttonCell"
          value={getInputValue("batteries_buttonCell")}
        />
        <label>Lithium</label>
        <input
          type="text"
          name="batteries_lithium"
          value={getInputValue("batteries_lithium")}
        />
        <label>Lithium Ion</label>
        <input
          type="text"
          name="batteries_lithiumIon"
          value={getInputValue("batteries_lithiumIon")}
        />
        <label>Magnesium</label>
        <input
          type="text"
          name="batteries_magnesium"
          value={getInputValue("batteries_magnesium")}
        />
        <label>Co-Mingled</label>
        <input
          type="text"
          name="batteries_coMingled"
          value={getInputValue("batteries_coMingled")}
        />
        <label>Other 1</label>
        <input
          type="text"
          name="batteries_other1"
          value={getInputValue("batteries_other1")}
        />
        <label>Other 2</label>
        <input
          type="text"
          name="batteries_other2"
          value={getInputValue("batteries_other2")}
        />
      </div>
      <div className="material--eWaste" data-name="eWaste">
        <div className="material--title">
          <h3>eWaste</h3>
        </div>

        <label>
          <span>Monitors</span>
        </label>
        <input type="text" name="monitors" value={getInputValue("monitors")} />
        <label>Keyboards</label>
        <input
          type="text"
          name="keyboards"
          value={getInputValue("keyboards")}
        />
        <label>Hard Drives</label>
        <input
          type="text"
          name="hardDrives"
          value={getInputValue("hardDrives")}
        />
        <label>Printers</label>
        <input type="text" name="printers" value={getInputValue("printers")} />
        <label>Other 1</label>
        <input
          type="text"
          name="electronicsOther1"
          value={getInputValue("electronicsOther1")}
        />
        <label>Other 2</label>
        <input
          type="text"
          name="electronicsOther2"
          value={getInputValue("electronicsOther2")}
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
          type="text"
          name="special_airbag"
          value={getInputValue("special_airbag")}
        />
        <label>Solar Panels</label>
        <input
          type="text"
          name="special_solarPanels"
          value={getInputValue("special_solarPanels")}
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
          type="text"
          name="HG_devices"
          value={getInputValue("HG_devices")}
        />
        <label>Fixtures</label>
        <input
          type="text"
          name="HG_fixtures"
          value={getInputValue("HG_fixtures")}
        />
        <label>Toners</label>
        <input
          type="text"
          name="HG_toners"
          value={getInputValue("HG_toners")}
        />
        <label>Transformers</label>
        <input
          type="text"
          name="HG_transformers"
          value={getInputValue("HG_transformers")}
        />
        <label>PCB Containing</label>
        <input
          type="text"
          name="HG_pcbContaining"
          value={getInputValue("HG_pcbContaining")}
        />
        <label>Other 1</label>
        <input
          type="text"
          name="HG_other1"
          value={getInputValue("HG_other1")}
        />
        <label>Other 2</label>
        <input
          type="text"
          name="HG_other2"
          value={getInputValue("HG_other2")}
        />
        <label>Other 3</label>
        <input
          type="text"
          name="HG_other3"
          value={getInputValue("HG_other3")}
        />
        <label>Other 4</label>
        <input
          type="text"
          name="HG_other4"
          value={getInputValue("HG_other4")}
        />
      </div>
    </section>
  );
};

Material.propTypes = {};

export default Material;
