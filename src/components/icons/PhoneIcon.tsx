import * as React from 'react';
import { FC, forwardRef } from 'react';
import { Icon } from '../../interfaces/icon';

const PhoneIcon: FC<Icon> = ({ color = 'currentColor', size = 24 }, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
  >
    <g id="phone" transform="translate(-311 -266)">
      <g id="phone-call" transform="translate(310.461 266)">
        <g id="Group_19" data-name="Group 19" transform="translate(0.539 0)">
          <path
            id="Path_72"
            data-name="Path 72"
            d="M23.861,17.614l-3.349-3.349A2.228,2.228,0,0,0,16.8,15.1a2.279,2.279,0,0,1-2.632,1.435c-2.392-.6-5.622-3.708-6.22-6.22A2.168,2.168,0,0,1,9.387,7.685a2.228,2.228,0,0,0,.837-3.708L6.875.628a2.389,2.389,0,0,0-3.23,0L1.373,2.9C-.9,5.293,1.612,11.633,7.234,17.255S19.2,25.508,21.588,23.116l2.273-2.273A2.389,2.389,0,0,0,23.861,17.614Z"
            transform="translate(-0.539 0)"
          />
        </g>
      </g>
      <rect
        id="Rectangle_9"
        data-name="Rectangle 9"
        width="24"
        height="24"
        transform="translate(311 266)"
        fill="none"
      />
    </g>
  </svg>
);

export default PhoneIcon;
