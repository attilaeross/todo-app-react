import React from "react";

function InputElement(props) {
  return (
    <input
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
    ></input>
  );
}

export default InputElement;
