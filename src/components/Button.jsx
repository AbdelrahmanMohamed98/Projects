import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Button = ({
  bgColor,
  color,
  size,
  borderRadius,
  text,
  icon,
  width,
  bgHoverColor,
}) => {
  const { setIsClicked } = useStateContext();
  return (
    <button
      type="button"
      onClick={() => setIsClicked(false)}
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width} hover:bg-${bgHoverColor}`}>
      {text} {icon}
    </button>
  );
};

export default Button;
