import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

import { plantsArr } from "./data/plantData";
// - header
//   - h1
//   - h2 Saving X plants from dehydration
// - section
//   - h1
//   - article
//     - h1 name / type
//     - h2 last watered date
//     - border green/red if well watered

function App() {
  return (
    <div className="App">
      <Header amount={plantsArr.length} />
      <PlantList plants={plantsArr} />
    </div>
  );
}

export default App;
