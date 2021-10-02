import * as React from 'react';
import { FC } from 'react';
import { useForm } from "react-hook-form"

interface TextFieldProps {
  name: string;
  label: string;
}

const TextField: FC<TextFieldProps> = ({ name, label }) => {
  const { register } = useForm()

  return (
    <div className="relative pb-8">
      <input
        type="text"
        autoComplete="off"
        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent bg-transparent focus:outline-none focus:border-rose-600"
        placeholder={label}
        {...register(name)}
      />
      <label
        htmlFor="email"
        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};

export default TextField;
