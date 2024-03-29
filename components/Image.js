import React from "react";
// import classNames from "classnames";
import styled from "styled-components";
import { withTachyons } from "reactyons";

const Image = styled(({ as, children, skin, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    // className: ({ skin, theme, ...props }) => classNames()
  })``;

Image.defaultProps = {
  as: "img",
};

export default withTachyons(Image);
