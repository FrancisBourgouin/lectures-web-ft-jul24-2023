import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Awesome from "./components/Awesome";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Super Project Of Destiny!</h1>
      </header>
      <section>
        <Awesome icon={"🥔"}>
          <Greeting name="Curtis" />
        </Awesome>
        <Awesome icon={"🍕"}>
          <Greeting name="Max" />
        </Awesome>
        <Awesome icon={"🐒"}>
          <Greeting name="Yuli" />
        </Awesome>
        <Awesome icon="🐸">WAZZZZAAAAA</Awesome>

        <Awesome />
      </section>
    </div>
  );
}

export default App;
