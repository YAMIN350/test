import React from "react";

export const Container: React.FC<{ children: any }> = ({ children }) => {
  return <div style={container_style}>{children}</div>;
};

const container_style: React.CSSProperties = {
  maxWidth: 980,
  padding: 0,
  margin: "auto",
};
