import React from "react";
import styled from "tachyons-components";

const Outer = styled('div')`
  ${({ ratio }) => `aspect-ratio aspect-ratio--${ratio}`}
`;

const Inner = styled('div')`
  aspect-ratio--object cover
`;

export const Rect = ({ children, ...props }) => (
  <Outer {...props}>
    <Inner>
      {children}
    </Inner>
  </Outer>
);

Rect.defaultProps = {
  ratio: "16x9",
};

export default Rect;
