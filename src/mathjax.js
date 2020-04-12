window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
      ["$$", "$$"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ],
    processEscapes: true
  },
  options: {
    skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code", "a"],
    ignoreHtmlClass: "editor",
    processHtmlClass: 'tex2jax_process'
  }
};

export default window.MathJax;