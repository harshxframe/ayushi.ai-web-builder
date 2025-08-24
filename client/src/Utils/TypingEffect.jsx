import React, { useEffect, useState, useRef } from "react";
import "../pages/styles.css";

const TypingEffect = ({ text, speed = 2, className = "text-base" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (!text) return;

    // Clean text: remove Markdown-like formatting
    const cleanText = text.replace(/[#*_\-]+/g, "").trim();

    let index = 0;
    setDisplayedText(""); // reset before typing

    const typeChar = () => {
      if (index < cleanText.length) {
        setDisplayedText((prev) => {
          const newText = prev + cleanText.charAt(index);

          // auto-scroll as we type
          if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
          }

          return newText;
        });
        index++;
        setTimeout(typeChar, speed); // recursive typing
      }
    };

    typeChar(); // start typing

    return () => {
      index = cleanText.length; // cancel typing if unmounted
    };
  }, [text, speed]);

  return (
    <div
      ref={containerRef}
      className="h-[520px] overflow-y-auto scroll-smooth scrollbar-hide"
    >

      <p className={`whitespace-pre-wrap font-mono ${className}`}>
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  );
};

export default TypingEffect;
