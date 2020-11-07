import React from "react";

function Button(props) {
  if (props.link) {
    return (
      <a className="btn" rel="noreferrer noopener" target='_blank' href={props.link} key={props.key}>
        <span className="button--text">{props.text}</span>
      </a>
    );
  } else {
    return (
      <button className="btn" onClick={props.onClick} key={props.key}>
        <span className="button--text">{props.text}</span>
      </button>
    );
  }
}

export default Button;
