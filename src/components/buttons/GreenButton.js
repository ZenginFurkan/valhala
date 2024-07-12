import React from "react";

export default function GreenButton({ label }) {
  return (
    <button className="green-button" label={label}>
      {label}
    </button>
  );
}