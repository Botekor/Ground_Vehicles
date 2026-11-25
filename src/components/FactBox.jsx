import React from "react";
export default function FactBox({ fact }) {
  return (
    <div className="fact-box">
      <i className="bi bi-lightbulb-fill"></i>
      <span>{fact}</span>
    </div>
  );
}
