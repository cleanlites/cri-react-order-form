import React from "react";

import { TimeFrom } from "../inputs/time-picker";
const SiteInfo = ({ getInputValue }) => {
  return (
    <section class="section--site-info" data-name="siteInfo">
      <div class="section--title">Site Info</div>
      <div class="container-fluid">
        <div class="row site-info--row">
          <div class="col-sm-6">
            {/* <TimeFrom /> */}
            <label className="label-time" htmlFor="hours__from">
              Hours
            </label>
            <input
              aria-readonly
              disabled
              className="time-select"
              id="time-from"
              name="hours__from"
              value={getInputValue("hours__from")}
            />
            <label className="label-time" htmlFor="hours__to">
              To{" "}
            </label>
            <input
              aria-readonly
              disabled
              className="time-select"
              id="time-to"
              name="hours__to"
              value={getInputValue("hours__to")}
            />
            <input
              class=""
              name="heightRestrictions"
              placeholder="Height Restrictions"
              value={getInputValue("heightRestrictions")}
            />
            <label class="label-info" htmlFor="heightRestrictions">
              Height Restrictions
            </label>
            <input
              class=""
              name="noPallets"
              placeholder="# of Pallets"
              value={getInputValue("noPallets")}
            />
            <label class="label-info" htmlFor="noPallets">
              Number of Pallets
            </label>
            <input
              class=""
              name="estTotalWeight"
              placeholder="Est. Total Weight"
              value={getInputValue("estTotalWeight")}
            />
            <label class="label-info" htmlFor="estTotalWeight">
              Estimated Total Weight
            </label>
          </div>
          <div class="col-sm-6 site-info--checks">
            <label class="label-info" htmlFor="palletized">
              Items Palletized
            </label>
            <input
              type="checkbox"
              name="palletized"
              checked={getInputValue("palletized")}
            />

            <label class="label-info" htmlFor="liftGate">
              Lift Gate Needed
            </label>
            <input
              type="checkbox"
              name="liftGate"
              checked={getInputValue("liftGate")}
            />

            <label class="label-info" htmlFor="dock">
              Loading Dock Available
            </label>
            <input
              type="checkbox"
              name="dock"
              checked={getInputValue("dock")}
            />

            <label class="label-info" htmlFor="workersAvailable">
              Workers Available
            </label>
            <input
              type="checkbox"
              value="false"
              id="workersAvailable"
              name="workersAvailable"
              checked={getInputValue("workersAvailable")}
            />

            <label class="label-info" htmlFor="palletJack">
              Pallet Jack Available
            </label>
            <input
              type="checkbox"
              name="palletJack"
              checked={getInputValue("palletJack")}
            />

            <label class="label-info" htmlFor="forklift">
              Forklift Available
            </label>
            <input
              type="checkbox"
              name="forklift"
              checked={getInputValue("forklift")}
            />
          </div>
          <div class="col-md-12">
            <textarea
              class="textarea"
              type="textarea"
              name="comments"
              rows="2"
              value={getInputValue("comments")}
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};

SiteInfo.propTypes = {};

export default SiteInfo;
