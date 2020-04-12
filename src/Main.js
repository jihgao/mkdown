import React, { useState } from "react";
import Preview from "./Preview";
import Editor from "./Editor";
import example from "./example";

function Main() {
  const [source, setSource] = useState(example);
  function handleSourceChange(newSource) {
    setSource(newSource);
  }
  return (
    <div className="main">
      <Editor value={source} onChange={handleSourceChange}/>
      <Preview source={source}/>
    </div>
  );
}

export default Main;