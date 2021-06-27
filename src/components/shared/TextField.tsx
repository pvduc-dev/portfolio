import * as React from "react"
import { AriaTextFieldOptions, useTextField } from "@react-aria/textfield"
import { FC, useRef } from "react"

interface TextFieldProps extends AriaTextFieldOptions {

}

const TextField: FC<TextFieldProps> = (props) => {
  const ref = useRef();
  const { label, id } = props;
  const { labelProps, inputProps } = useTextField(props, ref);
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" />
    </div>
  )
}

export default TextField
