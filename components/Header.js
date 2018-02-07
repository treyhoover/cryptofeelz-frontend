import React from "react";
import styled from "tachyons-components";

export const Header = ({ as: T, ...props }) => (
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

Header.defaultProps = {
  as: "span"
};

const StyledHeader = styled(Header)`
  ${({ size }) => mapSize(size)}
`;

StyledHeader.defaultProps = {
  size: "md",
};

export default StyledHeader;
