import React from "react";

interface TextProps {
  children: React.ReactNode;
  [key: string]: any; // Allow additional props
}

const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <span className="text-lg font-bold" {...props}>
    {children}
  </span>
);

export default Text;
