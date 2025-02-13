import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

interface ButtonTextProps {
  onClick: () => void;
  label: string;
  [key: string]: any; // Allow additional props
}

const ButtonText: React.FC<ButtonTextProps> = ({
  onClick,
  label,
  ...props
}) => (
  <Button onClick={onClick} {...props}>
    <Text>{label}</Text>
  </Button>
);

export default ButtonText;
