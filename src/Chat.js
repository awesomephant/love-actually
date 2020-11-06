import React from "react";

function Chat(props) {
  return (
    <div className="chat">
      <iframe
        title="chat"
        frameborder="0"
        id="chat_embed"
        src={`https://www.twitch.tv/embed/eilissearson/chat?parent=${props.parent}`}
      ></iframe>
    </div>
  );
}

export default Chat;
