import React from "react";

const Button = (props) => {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      className={props.className}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};
export default Button;
