
import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="text-center p-6 bg-neutral-800 text-sm text-neutral-400">
      <p>© {currentYear} Francisco Cuevas. All rights reserved.</p>
    </footer>
  );
}