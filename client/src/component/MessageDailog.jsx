import React from "react";

function MessageDialog({ message, dismissEvent }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Semi-transparent dark overlay */}
      <div
        className="absolute inset-0 bg-transparent bg-opacity-30"
        onClick={dismissEvent} // click outside to dismiss
      ></div>

      {/* Liquid glass dialog */}
      <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg w-[300px] p-6 flex flex-col items-center">
        <p className="text-white text-center mb-6">{message}</p>
        <button
          onClick={dismissEvent}
          className="bg-violet-900 hover:app-gredient text-white px-4 py-2 rounded-lg transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

export default MessageDialog;
