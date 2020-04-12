import React, { useRef, useEffect, useState} from "react";
import MarkdownIt from "markdown-it";
import tocPlugin from "markdown-it-table-of-contents";
import "./mathjax";
import "mathjax/es5/tex-svg";

const md = new MarkdownIt({
  html: false,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: true,
  typographer: false,
  quotes: "“”‘’"
});
md.use(tocPlugin, { includeLevel: [2, 3], markerPattern: /^\[toc\]/im });


function Preview(props) {
  const [init, setInit] = useState(null);
  const { source } = props;
  const ele = useRef(null);
  useEffect(() => {
    if (!init) {
      window.MathJax.startup.elements = ele.current;
      window.MathJax.startup.getComponents();
      setInit(true);
    }
    ele.current.innerHTML = md.render(source || "");
    window.MathJax.typeset();
  }, [source, init]);
  return (
    <div className="preview" ref={ele}/>
  );
}

export default Preview;