import React from "react";
import styled, { keyframes } from "styled-components";

const scaleAnimation = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
      opacity: 0;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.9;
  z-index: 100;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.color.dark};
  border-radius: 100%;
  animation: ${scaleAnimation} 1s infinite ease-out;
`;

const Loader = () => (
  <LoaderContainer>
    <Spinner />
  </LoaderContainer>
);

export default Loader;
