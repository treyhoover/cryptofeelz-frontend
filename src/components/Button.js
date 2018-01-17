import React from "react";
import { Button as ReactyonsButton } from "reactyons";

const Button = ({ as, color, dark, inverted, padding, disabled, onClick, ...props }) => {
  const l = dark ? "dark" : "light";
  const fg = (dark && !inverted) ? "white" : "black";
  const bg = inverted ? color : `bg-${l}-${color}`;
  const colorProps = { [bg]: true, [fg]: true };
  return (
    <ReactyonsButton
      as={as}
      className={`${padding}`}
      f6 link dim={!disabled} mb2 bn pointer={!disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
      {...colorProps}
    />
  )
};

Button.defaultProps = {
  as: "button",
  color: "blue",
  dark: true,
  inverted: false,
  padding: "ph3 pv2",
  disabled: false,
};

export default Button;
