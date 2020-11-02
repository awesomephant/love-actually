import React, { useState } from "react";
import * as allReadings from "./data/all-readings.json";
import slugify from "slugify";
import ReactMarkdown from "react-markdown";

function Reading(props) {
  const [currentScreen, setCurrentScreen] = useState("Test-Reading");
  const textButtons = allReadings.default.data.map((r, i) => {
    return (
      <button onClick={setCurrentScreen.bind(this, slugify(r.title))}>
        {r.title}
      </button>
    );
  });

  const screens = [
    {
      id: "main",
      content: (
        <nav className="reading--nav">
          <button onClick={setCurrentScreen.bind(this, "history")}>
            history
          </button>
          <button onClick={setCurrentScreen.bind(this, "readings")}>
            readings
          </button>
          <button onClick={setCurrentScreen.bind(this, "recipes")}>
            recipes
          </button>
          <button onClick={setCurrentScreen.bind(this, "gallery")}>
            gallery
          </button>
        </nav>
      ),
    },
    {
      id: "history",
      content: (
        <>
          <nav className="reading--nav">
            <button onClick={setCurrentScreen.bind(this, "main")}>back</button>
          </nav>
          history goes here
        </>
      ),
    },
    {
      id: "readings",
      content: (
        <nav className="reading--nav">
          <button onClick={setCurrentScreen.bind(this, "main")}>back</button>
          {textButtons}
        </nav>
      ),
    },
    {
      id: "recipes",
      content: (
        <>
          <nav className="reading--nav">
            <button onClick={setCurrentScreen.bind(this, "main")}>back</button>
          </nav>
          recipes go here
        </>
      ),
    },
    {
      id: "gallery",
      content: (
        <>
          <nav className="reading--nav">
            <button onClick={setCurrentScreen.bind(this, "main")}>back</button>
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
            <button onClick={setCurrentScreen.bind(this, "readings")}>
              back
            </button>
          </nav>
          <article class="reading--text">
            <h2>{r.title}</h2>
            <ReactMarkdown>{r.body}</ReactMarkdown>
          </article>
        </>
      ),
    });
  });

  const screenMarkup = screens.map((s) => {
    return (
      <section data-active={currentScreen === s.id} class="screen">
        {s.content}
      </section>
    );
  });

  return <section className="reading">{screenMarkup}</section>;
}

export default Reading;
