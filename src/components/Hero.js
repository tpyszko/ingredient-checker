import styled from "styled-components";

const Hero = styled.div`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  min-height: ${({ minHeight }) => minHeight};
`;

Hero.defaultProps = {
  padding: "0",
  margin: "0",
  border: "none",
  minWidth: "100%"
};

export default Hero;
