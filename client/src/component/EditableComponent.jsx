import React, { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Load all grammars
import "prismjs/components/prism-markup";      // HTML
import "prismjs/components/prism-css";         // CSS
import "prismjs/components/prism-javascript";  // JS

const EditableCode = ({ initialCode, onCodeChange, editable = true }) => {
  const [code, setCode] = useState(initialCode);

  // Sync internal state whenever initialCode changes
  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  // Send updated code to parent
  useEffect(() => {
    onCodeChange?.(code);
  }, [code, onCodeChange]);

  // Highlight function using Prism
  const highlightCode = (c) => Prism.highlight(c, Prism.languages.markup, "markup");

  return (
    <div
      className="code-editor-container w-full h-full overflow-auto shadow-lg p-[0]"
      style={{
        background: "linear-gradient(123deg, #0f0020, #06001e, #09000f)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 10s ease infinite",
        fontFamily: "monospace",
        fontSize: 14,
      }}
    >
      <Editor
        value={code}
        onValueChange={(newCode) => editable && setCode(newCode)}
        highlight={highlightCode}
        padding={5}
        readOnly={!editable}
        className="editor"
        style={{
          color: "#e6e6e6",
          minHeight: "100%",
          whiteSpace: "pre",
          fontFamily: "monospace",
          fontSize: 14,
          outline: "none",
          border: "none",
          paddingBottom: "2rem",
        }}
      />
    </div>
  );
};

export default EditableCode;
