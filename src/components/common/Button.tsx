import * as React from "react"
import { ButtonHTMLAttributes, FC } from "react"

interface ButtonProps extends ButtonHTMLAttributes<any>{

}

const Button: FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button
      className="bg-white text-primary px-10 py-[0.625rem] font-semibold rounded"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
