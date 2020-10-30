import React from "react";

function Ticker(props) {
  const innerStyle = {
    animationDuration: `${props.text.length / 1.5}s`,
  };
  return (
    <div className="ticker" data-direction={props.direction}>
      <p className="ticker-inner" style={innerStyle}>
        <span>{props.text}</span>
        <span>{props.text}</span>
      </p>
    </div>
  );
}

export default Ticker;
