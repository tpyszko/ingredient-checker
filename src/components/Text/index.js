import styled from "styled-components";

export const Text = styled.p`
  color: ${({ color, theme }) => (color ? color : theme.color.dark)};
  color: ${props => (props.primary ? "palevioletred" : "white")};
  font-size: ${({ fontSize }) => fontSize};
  margin: 0.3em 0;
  line-height: 21px;
  display: ${({ display }) => display};
`;

export const H1 = styled.h1`
  font-size: 3.5em;
  margin: 0.3em 0;
  color: ${({ color, theme }) => (color ? color : theme.color.dark)};
`;

export const H2 = styled.h1`
  font-size: 2em;
  margin: 0.3em 0;
  color: ${({ color, theme }) => (color ? color : theme.color.dark)};
`;

export const H3 = styled.h1`
  font-size: 1.5em;
  color: ${({ color, theme }) => (color ? color : theme.color.dark)};
`;
