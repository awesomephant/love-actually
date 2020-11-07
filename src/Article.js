import React from "react";
import ReactMarkdown from "react-markdown";

function Article(props) {
  return (
    <article className="reading--text">
      <h2>{props.title}</h2>
      <ReactMarkdown>{props.body}</ReactMarkdown>
    </article>
  );
}

export default Article;
