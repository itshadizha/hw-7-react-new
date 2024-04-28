import styled, { css } from "styled-components";
import { PropTypes } from "prop-types";

const Button = ({ children, variant }) => {
  return (
    <StyledButton disabled={false} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;

const Background_variants = {
  outlined: {
    normal: "#f3f3f3",
    hover: "#c7bebe",
    active: "#0052BC",
    disabled: "#6d7075",
  },
  contained: {
    normal: "#1F6ED4",
    hover: "#4C94F0",
    active: "#0052BC",
    disabled: "#535368",
  },
  warning: {
    normal: "#FF912B",
    hover: "#F37705",
    active: "#CF6300",
    disabled: "#cfc5b3",
  },
  danger: {
    normal: "#DF2D2D",
    hover: "#E54343",
    active: "#C20B0B",
    disabled: "#C9C9C9",
  },
};

const getVariant = ({ variant }) => {
  const initialVariant = Background_variants[variant];
  return css`
    background-color: ${initialVariant.normal};
    &:hover {
      background-color: ${initialVariant.hover};
    }
    &:active {
      background-color: ${initialVariant.active};
    }
    &:disabled {
      background-color: ${initialVariant.disabled};
    }
  `;
};

const StyledButton = styled.button`
  ${getVariant}
  border: none;
  width: 200px;
  height: 50px;
  border-radius: 15px;
`;

Button.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
};
