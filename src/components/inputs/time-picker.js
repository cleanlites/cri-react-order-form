import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../AppContext";

export const TimeFrom = (props) => {
  const {
    setInputValue,
    getInputValue,
    setGeneratorSame,
    setValid,
    appState: { inputs, generatorSame, sections },
  } = useContext(AppContext);

  useEffect(() => {
    setInputValue({ name: "time-from", value: "08:00AM" });
    setInputValue({ name: "time-to", value: "05:00PM" });
  }, []);
  return (
    <>
      <label className="label-time" for="time-from">
        Hours
      </label>
      <select
        className="time-select"
        id="time-from"
        name="time-from"
        onChange={(e) => {
          // console.log(e.target.name);
          setInputValue(e.target);
        }}
      >
        <option value="8:00 AM">8:00 AM</option>
        <option value="8:30 AM">8:30 AM</option>
        <option value="9:00 AM">9:00 AM</option>
        <option value="9:30 AM">9:30 AM</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="10:30 AM">10:30 AM</option>
        <option value="11:00 AM">11:00 AM</option>
        <option value="11:30 AM">11:30 AM</option>
        <option value="12:00 pm">12:00 pm</option>
        <option value="12:30 pm">12:30 pm</option>
        <option value="1:00 pm">1:00 pm</option>
        <option value="1:30 pm">1:30 pm</option>
        <option value="2:00 pm">2:00 pm</option>
        <option value="2:30 pm">2:30 pm</option>
        <option value="3:00 pm">3:00 pm</option>
        <option value="3:30 pm">3:30 pm</option>
        <option value="4:00 pm">4:00 pm</option>
        <option value="4:30 pm">4:30 pm</option>
        <option value="5:00 pm">5:00 pm</option>
        <option value="5:30 pm">5:30 pm</option>
        <option value="6:00 pm">6:00 pm</option>
      </select>
    </>
  );
};

export const TimeTo = (props) => {
  const {
    setInputValue,
    getInputValue,
    setGeneratorSame,
    setValid,
    appState: { inputs, generatorSame, sections },
  } = useContext(AppContext);

  useEffect(() => {
    setInputValue({ name: "time-from", value: "08:00AM" });
    setInputValue({ name: "time-to", value: "05:00PM" });
  }, []);
  return (
    <>
      <label className="label-time" for="time-to">
        To{" "}
      </label>
      <select
        className="time-select"
        id="time-to"
        name="time-to"
        onChange={(e) => {
          // console.log(e.target.name);
          setInputValue(e.target);
        }}
      >
        <option value="9:00 AM">9:00 AM</option>
        <option value="9:30 AM">9:30 AM</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="10:30 AM">10:30 AM</option>
        <option value="11:00 AM">11:00 AM</option>
        <option value="11:30 AM">11:30 AM</option>
        <option value="12:00 PM">12:00 PM</option>
        <option value="12:30 PM">12:30 PM</option>
        <option value="1:00 PM">1:00 PM</option>
        <option value="1:30 PM">1:30 PM</option>
        <option value="2:00 PM">2:00 PM</option>
        <option value="2:30 PM">2:30 PM</option>
        <option value="3:00 PM">3:00 PM</option>
        <option value="3:30 PM">3:30 PM</option>
        <option value="4:00 PM">4:00 PM</option>
        <option value="4:30 PM">4:30 PM</option>
        <option value="5:00 PM" selected>
          5:00 PM
        </option>
        <option value="5:30 PM">5:30 PM</option>
        <option value="6:00 PM">6:00 PM</option>
      </select>
    </>
  );
};
