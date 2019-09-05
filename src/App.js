import React from "react";
import "./App.css";

function App() {
  return (
    <div className="search-area">
      <form>
        <input
          className="input-group inputText"
          type="text"
          placeholder="Input Todo"
        ></input>
        <button className="btn btn-success button">Add</button>
      </form>
    </div>
  );
}

export default App;
