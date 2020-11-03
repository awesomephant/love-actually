import React, { useEffect, useRef } from "react";

function Ticker(props) {
  const lastText = useRef(null);
  const container = useRef(null);

  const innerStyle = {
    animationDuration: `${props.text.length * 150}ms`
  }

  useEffect(() => {
    const containerBox = container.current.getBoundingClientRect();
    const lastTextBox = lastText.current.getBoundingClientRect();
    const ratio = lastTextBox.x / containerBox.width;
    document.body.style.setProperty("--ticker-ratio", ratio);
    console.log(ratio);
  }, []);

  return (
    <div className="ticker" data-direction={props.direction}>
      <p ref={container} className="ticker-inner" style={innerStyle}>
        <span>{props.text}</span>
        <span ref={lastText}>{props.text}</span>
      </p>
    </div>
  );
}

export default Ticker;
