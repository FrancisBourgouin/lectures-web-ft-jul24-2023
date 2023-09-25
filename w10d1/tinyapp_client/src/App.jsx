import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [urls, setUrls] = useState(null);
  const [view, setView] = useState(
    document.location.pathname === "/" ? "INDEX" : "CREATE"
  );

  useEffect(() => {
    axios
      .get("http://localhost:3000/urls")
      .then((res) => res.data)
      .then((data) => setUrls(data))
      .catch((err) => console.log(err))
      .finally(() => console.log("Loaded urls!"));
  }, []);

  const parsedUrls =
    urls &&
    urls.map((url) => (
      <li>
        {url.short_url} - {url.long_url}
      </li>
    ));
  return (
    <>
      <header>
        Beautiful Tinyapp
        <button onClick={() => setView("INDEX")}>VIEW</button>
        <button onClick={() => setView("CREATE")}>CREATE</button>
      </header>
      <main>
        {urls && view === "INDEX" && (
          <section>
            <ul>{parsedUrls}</ul>
          </section>
        )}
      </main>
      {view === "CREATE" && (
        <form>
          <input type="text" />
          <input type="text" />
          <button>Add new url</button>
        </form>
      )}
    </>
  );
}

export default App;
