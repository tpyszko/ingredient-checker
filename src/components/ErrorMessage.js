import React from "react";
import PropTypes from "prop-types";
import { Text } from "../components/Text";

const ErrorMessage = ({ error }) =>
  error &&
  error.map(item => (
    <Text color="red" key={item}>
      {item}
    </Text>
  ));

ErrorMessage.propTYpes = {
  error: PropTypes.array
};

export default ErrorMessage;
