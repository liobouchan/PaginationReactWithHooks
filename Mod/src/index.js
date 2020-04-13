import React from "react";
import ReactDOM from "react-dom";
import CommentWithPagination from "./CommentWithPagination";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <CommentWithPagination />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
