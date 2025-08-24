// LLMResponseViewer.jsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export default function LLMResponseViewer({ text }) {
  if (!text) return null;

  return (
    <div className="prose prose-neutral max-w-none
                    prose-h1:mt-0 prose-pre:rounded-xl prose-pre:shadow
                    prose-code:before:hidden prose-code:after:hidden">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
