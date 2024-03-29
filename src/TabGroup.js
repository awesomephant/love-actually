import React, { useState } from "react"
import { ReactComponent as Corner } from "./assets/corner.svg"

function TabGroup(props) {
  const [currentTab, setCurrentTab] = useState(0)

  function handleTabClick(i) {
    setCurrentTab(i)
  }

  const tabs = props.children.map((c, i) => {
    return (
      <section key={`panel-${i}`} className={i === currentTab ? "active tabgroup--panel" : "tabgroup--panel"} role="tabpanel">
        {c}
      </section>
    )
  })

  const buttons = props.titles.map((title, i) => {
    return (
      <button role="tab" onClick={handleTabClick.bind(this, i)} className={i === currentTab ? "active" : ""} key={`tab-${i}`}>
        {title}
        <Corner></Corner>
      </button>
    )
  })

  return (
    <div className="tabgroup">
      <nav className="tabgroup--tabs">{buttons}</nav>
      <main className="tabgroup--content">{tabs}</main>
    </div>
  )
}

export default TabGroup
