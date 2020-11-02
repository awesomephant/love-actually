import Stream from "./Stream.js";
import Logo from "./Logo.js";
import Ticker from "./Ticker.js";
import Reading from "./Reading.js";
import Countdown from "./Countdown.js";
import TabGroup from "./TabGroup.js";
import Chat from "./Chat.js";
import * as settings from "./data/settings.json"

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
        <Stream></Stream>
        <Countdown target="2020-12-03 14:23"></Countdown>
      </section>
      <section className="app-section-reading">
        <TabGroup titles={["Chat", "Menu"]}>
          <Chat></Chat>
          <Reading></Reading>
        </TabGroup>
      </section>
    </div>
  );
}

export default App;
