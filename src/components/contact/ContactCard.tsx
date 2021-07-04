import * as React from 'react';
import EmailIcon from '../icons/EmailIcon';
import LocationIcon from '../icons/LocationIcon';
import PhoneIcon from '../icons/PhoneIcon';

const contactProperties = [
  {
    key: 'email',
    value: 'pvduc.dev@gmail.com',
    icon: EmailIcon,
  },
  {
    key: 'phone',
    value: '+84 86 570 7906',
    icon: PhoneIcon,
  },
  {
    key: 'address',
    value: 'Me Tri, Nam Tu Liem, Hanoi, Vietnam.',
    icon: LocationIcon,
  },
];

const ContactCard = () => {
  return (
    <div className="flex justify-center items-center rounded-lg bg-white shadow-lg">
      <div
        className="py-6"
      >
        {contactProperties.map(({key, value, icon}) => {
          const Icon = icon;
          return (
            <div
              key={key}
              className="flex items-center py-3"
            >
              <div className="inline-block p-2 rounded-full bg-secondary text-primary">
                <Icon/>
              </div>
              <span className="ml-4">{value}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ContactCard;
