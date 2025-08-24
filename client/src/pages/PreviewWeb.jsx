import React from "react";
import IframePreview from "../component/IframePreview";



function PreviewWeb() {
  // read query params
  const params = new URLSearchParams(window.location.search);
  const finalCode = params.get("code") || "<h1>No code provided</h1>";
  const device = params.get("device") || false;

  return (
    <div className="w-[100wh] h-[100vh]">
    <IframePreview htmlContent={decodeURIComponent(finalCode)} isPhone={false} />
    </div>
  );
}

export default PreviewWeb;
