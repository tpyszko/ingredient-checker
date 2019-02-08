import React from "react";
import styled from "styled-components";
import { Text } from "../components/Text";

const Image = styled.img`
  width: 100%;
`;

const ImagePreview = ({ src }) =>
  src ? <Image src={src} /> : <Text>Please upload ingredients label</Text>;

export default ImagePreview;
