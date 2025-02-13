import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  [key: string]: any; // Allow additional props
}

const Button: React.FC<ButtonProps> = ({ onClick, children, ...props }) => (
  <button
    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;
