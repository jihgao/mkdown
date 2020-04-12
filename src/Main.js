import React from "react";
import Preview from "./Preview";
import Editor from "./Editor";

function Main() {
  return (
    <div className="main">
      <Editor />
      <Preview />
    </div>
  );
}

export default Main;