import React from "react";

export default function WhiteButton({ label, icon }) {
  return (
    <button className="white-button" label={label} icon={icon}>
      {icon && <i className={`pi ${icon} button-icon`}></i>}
      {label}
    </button>
  );
}
