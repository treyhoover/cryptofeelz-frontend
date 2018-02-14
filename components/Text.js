import React from "react";
// import classNames from "classnames";
import styled from "styled-components";
import { withTachyons } from "reactyons";

const Text = styled(({ as, children, skin, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    // className: ({ skin, theme, ...props }) => classNames(),
  })``;

Text.defaultProps = {
  as: "span",
};

export default withTachyons(Text);
