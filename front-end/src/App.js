import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://verbose-acorn-5wvj5qpg4x4h7649-5002.app.github.dev/about")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>About Me</h1>
      <img
        src={data.image}
        alt="Shritha"
        width="200"
        style={{ borderRadius: "100px" }}
      />
      <h2>{data.name}</h2>
      <p>{data.about}</p>
      <p><em>{data.hobbies}</em></p>
    </div>
  );
}

export default App;
