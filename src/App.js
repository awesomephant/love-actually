import Stream from "./Stream.js"
import Logo from "./Logo.js"
import Ticker from "./Ticker.js"
import Reading from "./Reading.js"
import Countdown from "./Countdown.js"
import TabGroup from "./TabGroup.js"
import Chat from "./Chat.js"
import settings from "./data/settings.json"

function App() {
  return (
    <div className="app">
      <section className="app-section-ticker">
        <Ticker direction={0} text={settings.ticker_text}></Ticker>
      </section>
      <section className="app-section-header">
        <Logo></Logo>
      </section>
      <section className="app-section-stream">
        <Stream parent="www.loveactually.works"></Stream>
        <Countdown target="2021-12-03 20:30"></Countdown>
      </section>
      <section className="app-section-reading">
        <TabGroup titles={["Chat", "Menu"]}>
          <Chat parent="www.loveactually.works"></Chat>
          <Reading></Reading>
        </TabGroup>
      </section>
    </div>
  )
}

export default App
