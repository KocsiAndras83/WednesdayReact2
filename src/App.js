import "./App.css";
import { useState, useEffect } from "react";
import Client from "./Components/Client";

const App = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch(`api/clients?search=${input}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  const clickHandler = () => {
    setData(null);
    fetchData();
  };

  useEffect(() => {}, [data]);

  return (
    <div className="App">
      <h1>Veterinarian admin - Clients</h1>
      <input
        onFocus={() => setInput("")}
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => clickHandler()} disabled={!(input.length > 2)}>
        Search
      </button>
      {data &&
        data
          .filter((client) => client.name.includes(input))
          .map((client, i) => (
            <Client key={i} client={client} fetchData={fetchData} />
          ))}
    </div>
  );
};

export default App;
