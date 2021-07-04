import * as React from 'react';
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield';
import { FC, useRef } from 'react';
import styled from "styled-components"

interface TextFieldProps extends AriaTextFieldOptions {}

const Input = styled.input`
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 1.5px solid rgba(255, 255, 255, .4);

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  color:#999;
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all;
  -moz-transition:0.2s ease all;
  -webkit-transition:0.2s ease all;
`

const TextFieldWrap = styled.div`

`

const TextField: FC<TextFieldProps> = props => {
  const ref = useRef();
  const { label, id } = props;
  const { labelProps, inputProps } = useTextField(props, ref);
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="text"
        {...inputProps}
      />
    </div>
  );
};

export default TextField;
