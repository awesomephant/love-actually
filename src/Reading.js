import React, { useState } from "react"
import allReadings from "./data/allreadings.json"
import settings from "./data/settings.json"
import slugify from "slugify"
import Button from "./Button"
import Article from "./Article"
import Gallery from "./Gallery"
import CalendarLink from "./CalendarLink"

function Reading(props) {
  const [currentScreen, setCurrentScreen] = useState("main")
  const textButtons = allReadings.data.map((r, i) => {
    return <Button key={`button-${i}`} text={r.title} onClick={setCurrentScreen.bind(this, slugify(r.title))}></Button>
  })

  const screens = [
    {
      id: "main",
      content: (
        <nav className="reading--nav">
          <Button text="history" onClick={setCurrentScreen.bind(this, "history")}></Button>
          <Button text="readings" onClick={setCurrentScreen.bind(this, "readings")}></Button>
          <Button text="recipes" link="https://www.iceland.co.uk/"></Button>
          <Button text="gallery" onClick={setCurrentScreen.bind(this, "gallery")}></Button>
          <CalendarLink title="loveactually.works" start="20211203T203000Z" end="20211203T220000Z" location={window.location} details={settings.history}></CalendarLink>
        </nav>
      ),
    },
    {
      id: "history",
      content: (
        <>
          <nav className="reading--nav">
            <Button text="back" onClick={setCurrentScreen.bind(this, "main")}></Button>
          </nav>
          <Article title="History" body={settings.history}></Article>
        </>
      ),
    },
    {
      id: "readings",
      content: (
        <nav className="reading--nav">
          <Button text="back" onClick={setCurrentScreen.bind(this, "main")}></Button>
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
          <Gallery images={settings.gallery}></Gallery>
        </>
      ),
    },
  ]

  allReadings.data.forEach((r) => {
    const id = slugify(r.title)
    screens.push({
      id: id,
      content: (
        <>
          <nav className="reading--nav">
            <Button text="back" onClick={setCurrentScreen.bind(this, "readings")}></Button>
          </nav>
          <Article title={r.title} body={r.body}></Article>
        </>
      ),
    })
  })

  const screenMarkup = screens.map((s) => {
    return (
      <section key={`screen-${s.id}`} data-active={currentScreen === s.id} className="screen">
        {s.content}
      </section>
    )
  })

  return <section className="reading">{screenMarkup}</section>
}

export default Reading
