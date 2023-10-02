import React from "react";

const Button = ({ value, bgColor, width, height, type, onClick }) => {
  const className = type === "success" ? "done_btn" : "delete_btn";

  return (
    <button
      onClick={onClick}
      className={className}
      style={{ backgroundColor: bgColor, width: width, height: height }}
    >
      {value}
    </button>
  );
};

export default Button;
