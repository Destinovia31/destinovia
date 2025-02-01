"use client";

import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/destinovia-co/1-to-2-hour-brainstorming-call?hide_event_type_details=1&hide_gdpr_banner=1&text_color=131313&primary_color=655dff"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
};

export default CalendlyWidget;
