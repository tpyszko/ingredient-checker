import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Label = styled.label`
  overflow: hidden;
  position: relative;
  background: red;
  border-radius: 0.5em;
  float: left;
  padding: 0.5em;

  background: ${props => props.theme.color.default};
  color: ${({ theme }) => theme.color.dark};
  padding: 0.75em 2em;
  margin: 0.5rem 0;
  font-size: 1rem;
  text-decoration: none;
  outline: none;
  border-radius: 0.25em;
  width: 100%;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
  :active {
    opacity: 0.8;
  }
  :[type=file] {
    cursor: inherit;
    display: block;
    font-size: 999px;
    filter: alpha(opacity=0);
    min-height: 100%;
    min-width: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
  }
`;

const Input = styled.input`
  display: none;
`;

const InputFile = ({
  label,
  name,
  value,
  type,
  id,
  placeholder,
  required,
  onChange
}) => (
  <Label>
    {label}
    <Input
      name={name}
      value={value}
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  </Label>
);

InputFile.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func
};
export default InputFile;
