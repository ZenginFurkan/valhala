import React from "react";

export default function smallGreenButton({ label }) {
  return (
    <button className="small-green-button" label={label}>
      {label}
    </button>
  );
}
