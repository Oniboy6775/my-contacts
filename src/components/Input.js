import React from "react";

const Input = ({ name, value, placeholder, label, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-input"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
