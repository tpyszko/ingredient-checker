import React from "react";
import { Text } from "../components/Text";

const ErrorMessage = ({ error }) =>
  error &&
  error.map(item => (
    <Text color="red" key={item}>
      {item}
    </Text>
  ));

export default ErrorMessage;
