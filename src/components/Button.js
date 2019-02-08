import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  background: ${props => props.theme.color[props.nature]};
  color: ${({ theme }) => theme.color.dark};
  padding: 0.75em 2em;
  margin: 0.5rem 0;
  font-size: 1rem;
  text-decoration: none;
  outline: none;
  border-radius: 0.25em;
  border: none;
  width: ${props => (props.fluid ? "100%" : "auto")};

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
  :active {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    background: inherit;
    color: ${({ theme }) => theme.color.dark};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = ({ type, onClick, disabled, label, nature, fluid }) => (
  <ButtonStyle
    type={type}
    onClick={onClick}
    disabled={disabled}
    nature={nature}
    fluid={fluid}
  >
    {label}
  </ButtonStyle>
);

Button.defaultProps = {
  nature: "default"
};

export default Button;
