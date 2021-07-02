import * as React from "react"
import EmailIcon from "../icons/EmailIcon"
import PlaceholderIcon from "../icons/PlaceholderIcon"
import LocationIcon from "../icons/LocationIcon"

const contact = {
  address: 'Me Tri, Nam Tu Liem, Hanoi.',
  phone: '+84865707906',
  email: 'pvduc.dev@gmail.com'
}

const ContactCard = () => {
  return (
    <div
      className="px-8 lg:mx-8 py-12 rounded-lg bg-white shadow-lg"
    >
      <div
        className="flex items-center my-4"
      >
        <div
          className="inline-block p-2 rounded-full bg-secondary text-primary"
        >
          <EmailIcon />
        </div>
        <span
          className="ml-4"
        >
          pvduc.dev@gmail.com
        </span>
      </div>

      <div
        className="flex items-center my-4"
      >
        <div
          className="inline-block p-2 rounded-full bg-secondary text-primary"
        >
          <LocationIcon />
        </div>
        <span
          className="ml-4"
        >
          Me Tri, Nam Tu Liem, Hanoi
        </span>
      </div>
      <div
        className="flex items-center my-4"
      >
        <div
          className="inline-block p-2 rounded-full bg-secondary text-primary"
        >
          <LocationIcon />
        </div>
        <span
          className="ml-4"
        >
          +84865707906
        </span>
      </div>
    </div>
  )
}

export default ContactCard
