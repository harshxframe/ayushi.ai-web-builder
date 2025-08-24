// import React, { useState, useEffect, useRef } from "react";
// import TypingEffect from "../Utils/TypingEffect.jsx";

// const ChatHistory = ({ messages = [], showProgress = false }) => {
//   const [activeIndex, setActiveIndex] = useState(messages.length - 1);
//   const containerRef = useRef(null);

//   // Always make the last message active
//   useEffect(() => {
//     setActiveIndex(messages.length - 1);
//   }, [messages]);

//   // Scroll to bottom whenever messages change
//   const scrollToBottom = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollTop = containerRef.current.scrollHeight;
//     }
//   };

//   useEffect(() => {
//     // Delay slightly to ensure DOM updates
//     setTimeout(scrollToBottom, 50);
//   }, [messages]);

//   return (
    
//     <div ref={containerRef} className="flex flex-col gap-4 p-[5px] scroll-smooth overflow-x-hidden h-full">

//       {messages.map((msg, index) => (
//         <div key={index} className="flex flex-col gap-[10px]">
//           {/* User Prompt */}
//           <div className="w-[100%] test-gredient rounded-t-[10px]">
//             <p className="py-[10px] pl-[10px] text-[15px]">
//               Your Prompt - {msg.prompt || "No prompt"}
//             </p>
//           </div>

//           {/* Show spinner only for the last message if showProgress is true */}
//           {showProgress && index === activeIndex && (
//             <div className="w-[30px] h-[30px] bg-transparent flex justify-center items-center rounded-full animate-spin my-2">
//               <div className="w-[28px] h-[28px] border-3 border-t-transparent border-gray-100 rounded-full"></div>
//             </div>
//           )}

//           {/* Response */}
//           <div className="mb-[20px] h-fit overflow-y-auto scroll-smooth scrollbar-hide">
//             {index === activeIndex ? (
//               <TypingEffect
//                 text={msg.response || ""}
//                 speed={1}
//                 step={3}
//                 className="text-[13px]"
//                 onTypingEnd={scrollToBottom} // Scroll after typing completes
//               />
//             ) : (
//               <p className="text-[13px] whitespace-pre-wrap">{msg.response || ""}</p>
//             )}
//           </div>
//         </div>
//       ))}

// </div>

  
//   );
// };

// export default ChatHistory;

import React, { useState, useEffect, useRef } from "react";
import TypingEffect from "../Utils/TypingEffect.jsx";

const ChatHistory = ({ messages = [], showProgress = false }) => {
  const [activeIndex, setActiveIndex] = useState(messages.length - 1);
  const containerRef = useRef(null);

  // Always make the last message active
  useEffect(() => {
    setActiveIndex(messages.length - 1);
  }, [messages]);

  // Scroll to bottom whenever messages change
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Small delay to ensure DOM has rendered
    setTimeout(scrollToBottom, 50);
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-4 p-[5px] scroll-smooth overflow-x-hidden h-full overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-800"
    >
      {messages.map((msg, index) => (
        <div key={index} className="flex flex-col gap-[10px]">
          {/* User Prompt */}
          <div className="w-[100%] test-gredient rounded-t-[10px]">
            <p className="py-[10px] pl-[10px] text-[15px]">
              Your Prompt - {msg.prompt || "No prompt"}
            </p>
          </div>

          {/* Show spinner only for the last message if showProgress is true */}
          {showProgress && index === activeIndex && (
            <div className="w-[30px] h-[30px] bg-transparent flex justify-center items-center rounded-full animate-spin my-2">
              <div className="w-[28px] h-[28px] border-3 border-t-transparent border-gray-100 rounded-full"></div>
            </div>
          )}

          {/* Response */}
          <div className="mb-[20px] h-fit scroll-smooth">
            {index === activeIndex ? (
              <TypingEffect
                text={msg.response || ""}
                speed={1}
                step={3}
                className="text-[13px]"
                onTypingEnd={scrollToBottom} // Scroll after typing completes
              />
            ) : (
              <p className="text-[13px] whitespace-pre-wrap">
                {msg.response || ""}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;

