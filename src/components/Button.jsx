import React from "react";

const Button = ({ bgColor, color, size, width, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius}}
      className={`size-${size} w-${width} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
