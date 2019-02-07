import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex: ${({ flex }) => flex};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

Flex.defaultProps = {
  flex: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "no-wrap",
  minHeight: "inherit"
};

export default Flex;
