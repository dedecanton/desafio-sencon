import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useFetchUsers from "./hooks/useFetchUsers";

function App() {
  const { data, error, loading } = useFetchUsers("https://jsonplaceholder.typicode.com/users");
  console.log(data, error, loading)

  

  return <div className="App">oi</div>;
}

export default App;
