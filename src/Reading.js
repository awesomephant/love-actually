import React, { useState } from "react";
import * as allReadings from "./data/all-readings.json";
import slugify from "slugify";
import ReactMarkdown from "react-markdown";
import Button from "./Button";

function Reading(props) {
  const [currentScreen, setCurrentScreen] = useState("main");
  const textButtons = allReadings.default.data.map((r, i) => {
    return (
      <Button
        key={`button-${i}`}
        text={r.title}
        onClick={setCurrentScreen.bind(this, slugify(r.title))}
      ></Button>
    );
  });

  const screens = [
    {
      id: "main",
      content: (
        <nav className="reading--nav">
          <Button
            text="history"
            onClick={setCurrentScreen.bind(this, "history")}
          ></Button>
          <Button
            text="readings"
            onClick={setCurrentScreen.bind(this, "readings")}
          ></Button>
          <Button
            text="recipes" link="https://www.iceland.co.uk/"
          ></Button>
          <Button
            text="gallery"
            onClick={setCurrentScreen.bind(this, "gallery")}
          ></Button>
        </nav>
      ),
    },
    {
      id: "history",
      content: (
        <>
          <nav className="reading--nav">
            <Button
              text="back"
              onClick={setCurrentScreen.bind(this, "main")}
            ></Button>
          </nav>
          history goes here
        </>
      ),
    },
    {
      id: "readings",
      content: (
        <nav className="reading--nav">
          <Button
            text="back"
            onClick={setCurrentScreen.bind(this, "main")}
          ></Button>
          {textButtons}
        </nav>
      ),
    },
    {
      id: "gallery",
      content: (
        <>
          <nav className="reading--nav">
          <Button text="back" onClick={setCurrentScreen.bind(this, "main")}></Button>
          </nav>
          gallery goes here
        </>
      ),
    },
  ];

  allReadings.default.data.forEach((r) => {
    screens.push({
      id: slugify(r.title),
      content: (
        <>
          <nav className="reading--nav">
          <Button text="back" onClick={setCurrentScreen.bind(this, "readings")}></Button>
          </nav>
          <article className="reading--text">
            <h2>{r.title}</h2>
            <ReactMarkdown>{r.body}</ReactMarkdown>
          </article>
        </>
      ),
    });
  });

  const screenMarkup = screens.map((s) => {
    return (
      <section
        key={`screen-${s.id}`}
        data-active={currentScreen === s.id}
        className="screen"
      >
        {s.content}
      </section>
    );
  });

  return <section className="reading">{screenMarkup}</section>;
}

export default Reading;
