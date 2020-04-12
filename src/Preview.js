import React, { useRef, useEffect} from "react";
import MarkdownIt from "markdown-it";
import tocPlugin from "markdown-it-table-of-contents";

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
  const { source } = props;
  const ele = useRef(null);
  useEffect(() => {
    ele.current.innerHTML = md.render(source || "");
  }, [source]);
  return (
    <div className="preview" ref={ele}/>
  );
}

export default Preview;