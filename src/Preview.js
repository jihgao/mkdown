import React, { useRef, useEffect, useState} from "react";
import MarkdownIt from "markdown-it";
import tocPlugin from "markdown-it-table-of-contents";
import "./mathjax";
import "mathjax/es5/tex-svg";
import mermaid from "mermaid";

mermaid.initialize({ startOnLoad: true });

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
  let offcanvas = document.querySelector('#offcanvas');
  if (!offcanvas){
    offcanvas = document.createElement('div');
    offcanvas.setAttribute('id', 'offcanvas');
    document.body.appendChild(offcanvas);
  }
  useEffect(() => {
    if (!init) {
      window.MathJax.startup.elements = ele.current;
      window.MathJax.startup.getComponents();
      setInit(true);
    }
    try {
    ele.current.innerHTML = md.render(source || "");
    ele.current.querySelectorAll(".language-flow").forEach(($el, idx) => {
      mermaid.mermaidAPI.render(
        `chart-${idx}`,
        $el.textContent,
        (svgCode) => {
          $el.innerHTML = svgCode;
        },
        offcanvas
      );
    });
    window.MathJax.typeset();
  }catch(error){}
  }, [source, init]);
  return (
    <div className="preview" ref={ele}/>
  );
}

export default Preview;