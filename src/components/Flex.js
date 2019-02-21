import styled from "styled-components";

const Flex = styled.div`
  display: ${props => (props.display ? props.display : "flex")};
  width: 100%;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  box-sizing: border-box;
  overflow-y: auto;
  @media (max-width: 768px) {
    display: block;
    overflow-y: none;
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
