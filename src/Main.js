import React, { useState } from "react";
import Preview from "./Preview";
import Editor from "./Editor";

function Main() {
  const [source, setSource] = useState('');
  function handleSourceChange(newSource) {
    setSource(newSource);
  }
  return (
    <div className="main">
      <Editor onChange={handleSourceChange}/>
      <Preview source={source}/>
    </div>
  );
}

export default Main;