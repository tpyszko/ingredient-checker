import styled from "styled-components";

const Text = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;

export const H1 = styled.h1`
  font-size: 3em;
  color: ${({ theme }) => theme.color.dark};
`;


export default Text;