import * as React from 'react';
import { FC } from 'react';
import { IconProps } from '../../interfaces/icon-props';

const EmailIcon: FC<IconProps> = ({ color = 'currentColor', size = 24 }) => (
  <svg
    id="email"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
  >
    <rect
      id="Rectangle_5"
      data-name="Rectangle 5"
      width="24"
      height="24"
      opacity="0"
    />
    <path
      id="Path_70"
      data-name="Path 70"
      d="M18.15,4H4.85A2.85,2.85,0,0,0,2,6.85v9.5A2.85,2.85,0,0,0,4.85,19.2h13.3A2.85,2.85,0,0,0,21,16.35V6.85A2.85,2.85,0,0,0,18.15,4Zm-.636,1.9L11.5,10.412,5.486,5.9Zm.636,11.4H4.85a.95.95,0,0,1-.95-.95V7.087l7.03,5.273a.95.95,0,0,0,1.14,0L19.1,7.087V16.35A.95.95,0,0,1,18.15,17.3Z"
      transform="translate(1)"
    />
  </svg>
);
export default EmailIcon;
