import * as React from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { object, string } from "yup"

import ReCAPTCHA from "react-google-recaptcha"
import Button from "../common/Button"
import { Contact } from "../../interfaces/contact"
import { useForm } from "react-hook-form"


const ContactForm = () => {

  const contactSchema = object().shape({
    name: string().required().label("Name"),
    email: string().required().email().label("Email"),
    subject: string().required().label("Subject"),
    message: string().required().label("Message"),
    captchaToken: string().required(),
  })

  const { handleSubmit, register, setValue, formState: { errors } } = useForm({ mode: "onTouched", resolver: yupResolver(contactSchema) })

  const recaptchaChangeHandler = (value) => {
    setValue("captchaToken", value)
  }

  async function onSubmit(contact: Contact): Promise<void> {
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="px-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="mb-1">
        <label className="text-secondary text-sm" htmlFor="name">Your name</label>
        <input name="name" placeholder="Pv Duc" id="name" type="text" className="py-[0.625rem] px-3 bg-white rounded-md placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
        <p className="text-error text-xs mt-2 min-h-4 message">{errors.name?.message}</p>
      </div>
      <div className="mb-1">
        <label className="text-secondary text-sm" htmlFor="name">Your email</label>
        <input name="name" id="name" type="text" className="py-[0.625rem] px-3 bg-white rounded-md placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
        <p className="text-error text-xs mt-2 min-h-4 message">{errors.name?.message}</p>
      </div>
      <div className="mb-1">
        <label className="text-secondary text-sm" htmlFor="name">Subject</label>
        <input name="name" id="name" type="text" className="py-[0.625rem] px-3 bg-white rounded-md placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
        <p className="text-error text-xs mt-2 min-h-4 message">{errors.name?.message}</p>
      </div>
      <div
        className="mb-2"
      >
        <ReCAPTCHA
          sitekey={process.env.GATSBY_RECAPTCHA_KEY}
          onChange={recaptchaChangeHandler}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default ContactForm
