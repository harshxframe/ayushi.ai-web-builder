import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../pages/styles.css";

const customTheme = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: "transparent",
    margin: 0,
    padding: "1rem",
  },
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    background: "transparent",
    color: "#e6e6e6", // default text
  },
  // token-based overrides
  'token.comment': { color: "#6a9955", fontStyle: "italic" },
  'token.keyword': { color: "#c586c0" },
  'token.string': { color: "#ce9178" },
  'token.function': { color: "#dcdcaa" },
  'token.number': { color: "#b5cea8" },
  'token.operator': { color: "#d4d4d4" },
  'token.punctuation': { color: "#d4d4d4" },
  'token.tag': { color: "#569cd6" },
  'token.attr-name': { color: "#9cdcfe" },
  'token.boolean': { color: "#569cd6" },
};

const CodePreview = ({ code }) => (
  <div
    className="w-full h-full rounded-xl overflow-auto shadow-lg p-4 flex flex-col"
    style={{
      background: "linear-gradient(123deg, #0f0020, #06001e, #09000f)",
      backgroundSize: "300% 300%",
      animation: "gradientShift 10s ease infinite",
      display: "flex",
      flexDirection: "column"
    }}
  >
    <SyntaxHighlighter
      language="jsx"
      style={customTheme}
      showLineNumbers
      wrapLines
      customStyle={{
        background: "transparent",
        fontSize: "14px",
        lineHeight: "1.6",
         display: "flex",
      flexDirection: "column"
      }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
);

export default CodePreview;
