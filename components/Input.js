import React from "react";
import styled from "tachyons-components";

export const Input = ({ as: T, ...props }) => (
  <T {...props} />
);

export const mapSize = size => {
  switch (size) {
    case 'lg': return 'h3';
    case 'md': return 'h2';
    case 'sm': return 'h1';
    default: return '';
  }
};

Input.defaultProps = {
  as: "input"
};

const StyledInput = styled(Input)`
  ${({ size }) => mapSize(size)}
`;

StyledInput.defaultProps = {
  size: "md",
};

export default StyledInput;
