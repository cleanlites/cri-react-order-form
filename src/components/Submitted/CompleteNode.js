import React from "react";
import "./submitted.css";

const CompleteNode = (props) => {
  return (
    <div className="progress-nodes">
      <div className="success__progress-nodes--completed"></div>
      <ul>
        <li>
          <div></div>
          <a href="#"></a>
        </li>
        <li>
          <div></div>
          <a href="#"></a>
        </li>
        <li>
          <div></div>
          <a href="#"></a>
        </li>
        <li data-node-name="Materials">
          <div></div>
          <a href="#"></a>
        </li>
        <ul className="sub-item--ul"></ul>
        <li>
          <div></div>
          <a href="#"></a>
        </li>
        <li>
          <div></div>
          <a href="#">
            <center></center>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CompleteNode;
