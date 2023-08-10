import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../AppContext";

const t1 = [
  "8:00AM",
  "8:30AM",
  "9:00AM",
  "9:30AM",
  "10:00AM",
  "10:30AM",
  "11:00AM",
  "11:30AM",
  "12:00PM",
  "12:30PM",
  "1:00PM",
  "1:30PM",
  "2:00PM",
  "2:30PM",
  "3:00PM",
  "3:30PM",
  "4:00PM",
  "4:30PM",
];

const t2 = [
  "9:00AM",
  "9:30AM",
  "10:00AM",
  "10:30AM",
  "11:00AM",
  "11:30AM",
  "12:00PM",
  "12:30PM",
  "1:00PM",
  "1:30PM",
  "2:00PM",
  "2:30PM",
  "3:00PM",
  "3:30PM",
  "4:00PM",
  "4:30PM",
  "5:00PM",
  "5:30PM",
  "6:00PM",
];

export const TimeFrom = () => {
  const {
    setInputValue,
    appState: { inputs },
  } = useContext(AppContext);

  const handleChange = (e) => {
    setInputValue({ name: e.target.name, value: e.target.value });
  };
  return (
    <>
      <label className="label-time" htmlFor="time-from">
        Hours
      </label>
      <select
        className="time-select"
        id="time-from"
        name="hours__from"
        value={inputs.hours__from.value}
        onChange={handleChange}
      >
        {t1.map((t) => (
          <option key={`hours__from--${t}`} value={t}>
            {t}
          </option>
        ))}
      </select>
      <label className="label-time" htmlFor="time-to">
        To{" "}
      </label>
      <select
        className="time-select"
        id="time-to"
        name="hours__to"
        value={inputs.hours__to.value}
        onChange={handleChange}
      >
        {t2.map((t) => (
          <option key={`hours__to--${t}`} value={t}>
            {t}
          </option>
        ))}
      </select>
    </>
  );
};
