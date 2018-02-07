import React from "react";
import styled from "tachyons-components";

export const Button = ({ as: T, ...props }) => (
  <T {...props} />
);

export const mapSize = size => {
  switch (size) {
    case 'lg': return 'f1';
    case 'md': return 'f3';
    case 'sm':
    default: return 'f5';
  }
};

Button.defaultProps = {
  as: "button"
};

const StyledButton = styled(Button)`
  ${({ size }) => mapSize(size)}
`;

StyledButton.defaultProps = {
  size: "md",
};

export default StyledButton;
