import React from "react";
import Post from "./pages/Posts";
import "./App.css";

// Json-server npx json-server --watch db.json

function App() {
  return (
    <div className="App">
      <Post />
    </div>
  );
}

export default App;
