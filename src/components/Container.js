import styled from "styled-components";

const Container = styled.div`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  width: 100%;
  box-sizing: border-box;
`;

Container.defaultProps = {
  padding: "1em",
  border: "none"
};

export default Container;
