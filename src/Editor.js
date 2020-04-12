import React, { useRef, useEffect } from 'react';
import { editor } from "monaco-editor";
import { debounce } from 'lodash';



function Editor(props) {
  const container = useRef(null);
  const { value, onChange } = props;
  useEffect(() => {
    const _editor =  editor.create(container.current, {
      value: value,
      language: "markdown",
      renderLineHighLight: "none",
      lineDecorationWidth: 0,
      lineNumbersLeft: 0,
      lineNumbersWidth: 0,
      fontSize: 20,
      lineNumbers: "on",
      automaticLayout: false,
      quickSuggestions: false,
      occurrencesHighlight: false,
      colorDecorators: false,
      wordWrap: true,
      theme: "vs-dark",
      minimap: {
        enabled: false
      }
    });
    const _model = _editor.getModel();
    _model.onDidChangeContent(debounce(() => {
      onChange(_model.getValue());
    }, 500));
  }, [value, onChange])
  return (
    <div className="editor" ref={container} />
  );
}

Editor.defaultProps = {
  value: '',
  onChange:() => { }
};

export default Editor;