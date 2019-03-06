import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import { Text } from "../Text/";

const ErrorMessage = ({ error }) =>
  error &&
  error.map(item => (
    <Text color="red" key={uuid()}>
      {item}
    </Text>
  ));

ErrorMessage.propTYpes = {
  error: PropTypes.array
};

export default ErrorMessage;
