import React from "react";

function Dropdown({ label, options, onSelect }) {
  return (
    <div>
      <label className="dropdown-label">{label}</label>
      <select className="dropdown" onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
