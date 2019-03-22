import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${props => props.theme.color.stone};
  color: ${props => props.theme.color.light};
  min-height: 100%;
  max-width: 450px;
  min-width: 250px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30px;
  font-family: "KarlaItalic";
  @media (max-width: 768px) {
    min-height: 30px;
    min-width: 100%;
    padding-bottom: 0;
    align-items: center;
  }
`;

const Navigation = () => <Wrapper>Copyrights 2019</Wrapper>;

export default Navigation;
