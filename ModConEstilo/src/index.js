import React from "react";
import ReactDOM from "react-dom";
import CommentWithPagination from "./CommentWithPagination";

function App() {
  return (
    <div>
      <CommentWithPagination />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
