import React from "react";

const SuccessPane = ({ name }) => {
  return (
    <div className="form-values">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div
              style={{
                minHeight: "calc(90vh - 380px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <h2>Success!</h2>
              <p style={{ fontSize: "2rem" }}>
                Thanks {name.value} for submitting your order form. We will be
                back with you shortly.
              </p>
              <button style={{ width: "200px", margin: "0" }}>
                Back to Cleanlites.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPane;
