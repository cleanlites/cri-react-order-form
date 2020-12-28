import React from "react";

const Button = (props) => {
  return (
    <button
      id={props.c}
      onClick={props.onClick}
      className={props.valid ? "" : "btn--disabled"}
    >
      {props.name}
    </button>
  );
};
export default Button;
