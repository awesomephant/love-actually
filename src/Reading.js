import React from "react";
import * as allReadings from "./data/all-readings.json";

function Reading(props) {
  const texts = allReadings.default.data.map((r) => {
    return (
      <article>
        <h2>{r.title}</h2>
        <main>{r.body}</main>
      </article>
    );
  });
  return (
    <section className="reading">
      <nav className="reading--nav">
        <button>history</button>
        <button>readings</button>
        <button>recipes</button>
        <button>gallery</button>
      </nav>
      <main className="reading-content"></main>
      {texts}
    </section>
  );
}

export default Reading;
