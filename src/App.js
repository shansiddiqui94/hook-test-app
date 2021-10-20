import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsersAsync();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((result) => setData(result.data));
  // });

  const fetchUsersAsync = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const show = setData(result.data);
    console.log(show);
  };

  return (
    <div className="App">
      <h2>React Hooks Tutorial</h2>
      <ul>
        {data.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
