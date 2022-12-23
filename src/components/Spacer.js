import React from "react";

const Spacer = ({ h = 0, v = 0 }) => {
  return <div style={{ display: "inline-block", width: h, height: v }} />;
};

export default Spacer;
