import React from "react";

function Stream(props) {
  return (
    <div className="stream">
      <iframe
        title="stream"
        src={`https://player.twitch.tv/?channel=eilissearson&parent=${props.parent}`}
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default Stream;
