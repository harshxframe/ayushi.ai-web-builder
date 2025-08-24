// import React, { useRef, useEffect } from "react";

// const IframePreview = ({ htmlContent }) => {
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     if (iframeRef.current) {
//       const doc = iframeRef.current.contentDocument || iframeRef.current.document;
//       doc.open();
//       doc.write(htmlContent);
//       doc.close();
//     }
//   }, [htmlContent]);

//   return (
//     <iframe
//       ref={iframeRef}
//       title="HTML Preview"
//       style={{ width: "100%", height: "100%", border: "none" }}
//       sandbox="allow-scripts allow-same-origin"
//     />
//   );
// };

// export default IframePreview;

import React, { useRef, useEffect } from "react";

const IframePreview = ({ htmlContent, isPhone }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument || iframeRef.current.document;
      doc.open();
      doc.write(htmlContent);
      doc.close();

      // Hide scrollbars but allow scrolling
      const styleEl = doc.createElement("style");
      styleEl.innerHTML = `
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: auto; /* allow scrolling */
          scrollbar-width: none; /* Firefox */
        }
        /* Chrome, Safari, Edge */
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `;
      doc.head.appendChild(styleEl);

      // Make iframe focusable and focused for keyboard interaction
      iframeRef.current.setAttribute("tabindex", "0");
      iframeRef.current.focus();
    }
  }, [htmlContent]);

  return (
    <div
      className={`flex justify-center items-center transition-all duration-500`}
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(123deg, #0f0020, #06001e, #09000f)",
      }}
    >
      <iframe
        ref={iframeRef}
        title="HTML Preview"
        style={{
          border: isPhone ? "12px solid #000" : "none",
          borderRadius: isPhone ? "24px" : "0px",
          width: isPhone ? "375px" : "100%",
          height: isPhone ? "667px" : "100%",
          boxShadow: isPhone ? "0 0 20px rgba(0,0,0,0.5)" : "none",
          transition: "all 0.5s ease-in-out",
        }}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default IframePreview;
