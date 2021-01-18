import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../AppContext";
import { TimeTo, TimeFrom } from "../inputs/time-picker";
const OrderType = () => {
  const {
    setInputValue,
    getInputValue,
    setGeneratorSame,
    setValid,
    appState: { inputs, generatorSame, sections, current_pane },
  } = useContext(AppContext);

  useEffect(() => {
    setInputValue({ name: "time-from", value: "08:00AM" });
    setInputValue({ name: "time-to", value: "05:00PM" });
  }, []);

  const requiredRef = useRef();
  const requiredRef2 = useRef();

  const checkValid = () => {
    if (
      inputs["noPallets"].value !== "" &&
      inputs["estTotalWeight"].value !== ""
    ) {
      setValid("Site", true);
    } else {
      setValid("Site", false);
    }
  };
  const handleValueChange = (value) => {
    setInputValue(value.target);
    checkValid();
  };
  useEffect(() => {
    if (current_pane === 12) {
      setTimeout(() => {
        requiredRef.current.classList.add("invalid");
        requiredRef2.current.classList.add("invalid");
        setTimeout(() => {
          requiredRef.current.classList.remove("invalid");
          requiredRef2.current.classList.remove("invalid");
        }, 2000);
      }, 1000);
    }
  }, [current_pane]);

  const siteInfo = [
    ["palletized", "Items Palletized"],
    ["workersAvailable", "Workers Available"],
    ["liftGate", "Lift Gate Available"],
    ["palletJack", "Pallet Jack"],
    ["dock", "Loading Dock"],
    ["forklift", "Forklift"],
  ];
  return (
    <div className="container form-values">
      <div className="row">
        <p className="items-notice p-3">
          ITEMS MUST BE SHRINK WRAPPED AND PALLETIZED
        </p>
        <div className="col-lg-12 ">
          <div className="row pt-1">
            <div className="col-lg-6 col-md-6">
              <div className="site-label">Site Details</div>
              <TimeFrom />
              <TimeTo />
              <br />

              <input
                onChange={handleValueChange}
                className="pickup-details mt-2"
                name="heightRestrictions"
                placeholder="Height Restrictions"
              />
              <br />
              <label className="site-label" for="heightRestrictions">
                Pickup Details
              </label>
              <input
                onChange={handleValueChange}
                ref={requiredRef}
                id="noPallets"
                className="pickup-details required"
                name="noPallets"
                placeholder="# of Pallets (Required)"
              />
              <br />
              <input
                ref={requiredRef2}
                onChange={handleValueChange}
                id="estTotalWeight"
                className="pickup-details required "
                name="estTotalWeight"
                placeholder="Estimated Weight (Required) "
              />
            </div>

            <div className="col-lg-6 col-md-6 site-info">
              <div className="ad-opt">
                Additional Options <br />
                (Select Multiple)
              </div>
              {siteInfo.map((site) => (
                <>
                  <input
                    className="site-info-check"
                    type="checkbox"
                    name={site[0]}
                    id={site[0]}
                    checked={getInputValue(site[0])}
                  />
                  <label
                    htmlFor={site[0]}
                    onClick={() => {
                      setInputValue({
                        name: site[0],
                        value: !getInputValue(site[0]),
                      });
                      checkValid();
                    }}
                  >
                    <h2>{site[1]}</h2>
                  </label>
                </>
              ))}
            </div>
            <div className="col-md-12 mt-2">
              <label className="bold-label">Other Comments</label>
              <textarea
                className="textarea"
                type="textarea"
                rows="2"
                name="comments"
              ></textarea>
              <br />
              <div id="file_upload_area">
                <button id="add-another">Add A File</button>
                <br />
                <span>Add Up to 4 Files: </span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderType;
