"use client";

import { useEffect } from "react";

// GoHighLevel (LeadConnector) embedded lead-capture form for the free memoir
// request. The iframe hosts the actual form; form_embed.js handles responsive
// height adjustments. No local submission/success logic is used — the embedded
// form manages collection and confirmation on GoHighLevel's side.
const GHL_FORM_ID = "Bucba3oHV61btkYoM7YG";

export function MemoirForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-5">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
        id={`inline-${GHL_FORM_ID}`}
        title="Free Memoir Request"
        className="w-full"
        style={{
          width: "100%",
          height: "516px",
          border: "none",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
