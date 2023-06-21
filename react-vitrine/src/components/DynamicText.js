import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    let array = ["simple", "clear", "smart", "strong"];
  });
  return (
    <span className="dynamic-text">
      <span>simply</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamicText;
