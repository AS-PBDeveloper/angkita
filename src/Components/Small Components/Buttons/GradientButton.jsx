import React from "react";
import "./GradientButton.css";

const GradientButton = ({
  borderWidth = 2,
  colors = [
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#008000",
    "#0000FF",
    "#4B0082",
    "#EE82EE",
    "#FF0000",
  ],
  duration = 2500,
  borderRadius = 8,
  blur = 4,
  className = "",
  bgColor = "#000",
  text = "GitHub",
  href = "#",
}) => {
  const gradientStyle = {
    "--allColors": colors.join(", "),
    "--duration": `${duration}ms`,
    "--borderWidth": `${borderWidth}px`,
    "--borderRadius": `${borderRadius}px`,
    "--blur": `${blur}px`,
    "--bgColor": bgColor,
  };

  return (
    <div className="inline-block">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button
          style={gradientStyle}
          className={`w-full font-medium overflow-hidden rainbow-btn flex items-center justify-center ${className}`}
        >
          <span className="text-white btn-content inline-flex w-full h-full items-center justify-center px-5 py-2">
            {text}
          </span>
        </button>
      </a>
    </div>
  );
};

export default GradientButton;