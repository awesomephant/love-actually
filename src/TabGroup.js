import React, { useState } from "react";

function TabGroup(props) {
  const [currentTab, setCurrentTab] = useState(1);

  function handleTabClick(i) {
    setCurrentTab(i);
  }

  const tabs = props.children.map((c, i) => {
    return (
      <section
        key={`panel-${i}`}
        className={
          i === currentTab ? "active tabgroup--panel" : "tabgroup--panel"
        }
        role="tabpanel"
      >
        {c}
      </section>
    );
  });

  const buttons = props.titles.map((title, i) => {
    return (
      <button
        role="tab"
        onClick={handleTabClick.bind(this, i)}
        className={i === currentTab ? "active" : ""}
        key={`tab-${i}`}
      >
        {title}
      </button>
    );
  });

  return (
    <div className="tabgroup">
      <nav className="tabgroup--tabs">{buttons}</nav>
      <main className="tabgroup--content">{tabs}</main>
    </div>
  );
}

export default TabGroup;
