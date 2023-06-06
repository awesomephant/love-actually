import React from "react"

function Button(props) {
  if (props.link) {
    return (
      <a className="btn" rel="noreferrer noopener" target="_blank" href={props.link}>
        <span className="button--text">{props.text}</span>
      </a>
    )
  } else {
    return (
      <button className="btn" onClick={props.onClick}>
        <span className="button--text">{props.text}</span>
      </button>
    )
  }
}

export default Button
