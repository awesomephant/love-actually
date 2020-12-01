import React, { useState, useEffect } from "react";
import Ticker from "./Ticker";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

function calculateRemaining(target) {
  let now = dayjs();
  let then = dayjs(target);
  let diff = now.diff(then, "second") * -1;
  let seconds = diff % 60;
  let minutes = Math.floor(diff / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  if (diff > 0) {
    if (days > 0){
      return `${days} Days, ${hours % days} Hours ${minutes % hours} Minutes, ${seconds} Seconds until the event`;
    } else {
      if (hours > 0){
        return `${days} Days, ${hours} Hours ${minutes % hours} Minutes, ${seconds} Seconds until the event`;      
      } else {
        return `${days} Days, ${hours} Hours ${minutes} Minutes, ${seconds} Seconds until the event`;
      }
    }
  } else {
    return `The event is happening now!!!!`;
  }
}

function Countdown(props) {
  const [remaining, setRemaining] = useState(calculateRemaining(props.target));

  useEffect(() => {
    let timer = null;
    timer = setInterval(() => {
      setRemaining(calculateRemaining(props.target));
    }, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, [remaining, props.target]);

  return (
    <div className="countdown">
      <Ticker direction={1} text={`${remaining}`}></Ticker>
    </div>
  );
}

export default Countdown;
