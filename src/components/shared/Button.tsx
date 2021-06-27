import * as React from 'react';
import { FC, useRef } from 'react';
import { useButton } from '@react-aria/button';
import { AriaButtonProps } from '@react-types/button';

interface ButtonProps extends AriaButtonProps {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const ref = useRef();
  const { buttonProps } = useButton(props, ref);
  return (
    <button
      {...buttonProps}
      ref={ref}
    >
      {children}
    </button>
  );
};

export default Button;
