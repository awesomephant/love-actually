import React from "react";

function Button(props) {
  return (
    <button className="btn" onClick={props.onClick} key={props.key}>
      <span className="button--text">{props.text}</span>
    </button>
  );
}

export default Button;
