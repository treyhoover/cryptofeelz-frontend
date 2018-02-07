import React from "react";
import styled from "tachyons-components";

const Image = ({ src, alt, ...props }) => (
  <img src={src} alt={alt} {...props} />
);

export default styled(Image)``;
