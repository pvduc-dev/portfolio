import * as React from 'react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Contact } from '../../interfaces/contact';

interface FormProps<T = object> {
  name: string;
  dataNetlify?: boolean;
  dataNetlifyRecaptcha?: boolean;
  onSubmit: (data: T) => void | Promise<void>;
}

const Form: FC<FormProps<Contact>> = ({
  dataNetlify,
  dataNetlifyRecaptcha,
  onSubmit,
  children,
}) => {
  const { handleSubmit } = useForm();

  return (
    <form
      method="POST"
      data-netlify={dataNetlify}
      data-netlify-recaptcha={dataNetlifyRecaptcha}
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
    </form>
  );
};

export default Form;
