import React, { useState } from "react";

export default function Tooltip({ children, text }) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && (
        <span className="absolute left-1/2 -translate-x-1/2 -top-8 z-10 px-2 py-1 rounded bg-neutral-800 text-white text-xs whitespace-nowrap shadow-lg">
          {text}
        </span>
      )}
      {children}
    </span>
  );
}
