import { indexOf } from "lodash";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../AppContext";
import { TimeFrom } from "../inputs/time-picker";
const OrderType = () => {
  const {
    setInputValue,
    getInputValue,
    setGeneratorSame,
    setValid,
    appState: { inputs, generatorSame, sections, current_pane },
  } = useContext(AppContext);

  const requiredRef = useRef();
  const requiredRef2 = useRef();
  const uploadRef = useRef();

  const [files, setFiles] = useState([null]);
  const [uploading, setUploading] = useState(false);
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
    checkValid();
  }, [current_pane]);

  const siteInfo = [
    ["palletized", "Items Palletized"],
    ["workersAvailable", "Workers Available"],
    ["liftGate", "Lift Gate Available"],
    ["palletJack", "Pallet Jack"],
    ["dock", "Loading Dock"],
    ["forklift", "Forklift"],
  ];

  const handleFileThumbnail = (file, name) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    function setUrl(e) {
      return new Promise((resolve, reject) => {
        fileReader.onload = (e) => {
          resolve(e.target.result);
        };
      });
    }

    setUrl(this).then((res) => {});
  };
  const handleFileUpload = (e) => {
    setUploading(true);

    const uploaded_file = e.target.files[0];

    const all_files = files;
    const number = all_files.indexOf(all_files.slice(-1).pop()) + 1;
    const path = URL.createObjectURL(uploaded_file);

    const newObj = {
      number,
      path,
      name: uploaded_file.name,
      input_name: `fileUpload${number}`,
    };

    setFiles((prev) => [...prev, newObj]);
    setInputValue({ name: `fileUpload${number}`, value: uploaded_file });
    handleFileThumbnail(uploaded_file, newObj.input_name);
  };
  return (
    <div className={`container form-values ${uploading ? "uploading" : ""}`}>
      <div className="row">
        <div className="col-lg-12 ">
          <div className="row pt-1">
            <div className="col-lg-6 col-md-6">
              <div className="site-label">Site Details</div>
              <TimeFrom />

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
                value={getInputValue("noPallets")}
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
                value={getInputValue("estTotalWeight")}
                id="estTotalWeight"
                className="pickup-details required "
                name="estTotalWeight"
                placeholder="Estimated Weight (Required) "
              />
              <p className="items-notice px-0">
                ITEMS MUST BE SHRINK-WRAPPED & PALLETIZED
              </p>
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
                    <h5>{site[1]}</h5>
                  </label>
                </>
              ))}
            </div>
            <div className="col-md-12 mt-2">
              <label className=" other-comments">Other Comments</label>
              <textarea
                className="textarea"
                type="textarea"
                rows="2"
                name="comments"
                onChange={(e) =>
                  setInputValue({
                    name: "comments",
                    value: e.target.value,
                  })
                }
                value={getInputValue("comments")}
              ></textarea>
              <br />
              <div id="file_upload_area">
                <button
                  onClick={() => {
                    uploadRef.current.click();
                  }}
                  id="add-another"
                >
                  Add A File
                </button>
                <input
                  type="file"
                  style={{ visibility: "hidden" }}
                  ref={uploadRef}
                  onChange={handleFileUpload}
                />
                <br />
                <span>Add Up to 4 Files: </span>
                <br />

                {files.map((file, index) => {
                  if (!file) return "";
                  return (
                    <div className="img-holder" key={file.path}>
                      <img
                        className={"uploaded-file"}
                        src={file.path}
                        alt={`img--${index}`}
                      />
                      <p>{file.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderType;
