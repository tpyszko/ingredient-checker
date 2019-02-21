import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Text } from "./Text";

const Input = styled.input`
  display: block;
  padding: 0.7em;
  margin: 0.5em 0;
  font-size: 1em;
  width: 100%;
  color: ${({ theme }) => theme.color.dark};
  background: ${({ theme }) => theme.color.light};
  border: 1px solid ${({ theme }) => theme.color.dark};
  border-radius: 3px;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  margin: 2em 0;
`;

const InputField = ({
  label,
  name,
  value,
  type,
  id,
  placeholder,
  required,
  onChange
}) => (
  <InputWrapper>
    {label && (
      <Text as="label">
        <b>{label}</b>
      </Text>
    )}
    <Input
      name={name}
      value={value}
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  </InputWrapper>
);

InputField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  onChange: PropTypes.func
};

export default InputField;
