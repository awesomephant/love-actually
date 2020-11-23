import Stream from "./Stream.js";
import Logo from "./Logo.js";
import Ticker from "./Ticker.js";
import Reading from "./Reading.js";
import Countdown from "./Countdown.js";
import TabGroup from "./TabGroup.js";
import CalendarLink from "./CalendarLink.js";
import Chat from "./Chat.js";
import * as settings from "./data/settings.json";

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
        <CalendarLink
          title="loveactually.works"
          start="20201201T140000Z"
          end="20201201T160000Z"
          location={window.location}
          details={settings.history}
        ></CalendarLink>
        <Stream parent="loveactually.works"></Stream>
        <Countdown target="2020-12-01 14:23"></Countdown>
      </section>
      <section className="app-section-reading">
        <TabGroup titles={["Chat", "Menu"]}>
          <Chat parent="loveactually.works"></Chat>
          <Reading></Reading>
        </TabGroup>
      </section>
    </div>
  );
}

export default App;
