import React from "react";
import styled from "tachyons-components";

export const Ui = ({ as: T, ...props }) => (
  <T {...props} />
);

Ui.defaultProps = {
  as: "div",
};

const StyledUi = styled(Ui)``;

StyledUi.defaultProps = {
};

export default StyledUi;
