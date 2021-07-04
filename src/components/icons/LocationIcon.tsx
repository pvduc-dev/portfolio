import * as React from 'react';
import { FC, forwardRef } from 'react';
import { IconProps } from '../../interfaces/icon-props';

const LocationIcon: FC<IconProps> = ({ color = 'currentColor', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={color}
    viewBox="0 0 24 24"
  >
    <g id="Group_16" data-name="Group 16" transform="translate(-284 -300)">
      <path
        id="location"
        d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"
        transform="translate(284 300)"
      />
      <rect
        id="Rectangle_6"
        data-name="Rectangle 6"
        width="24"
        height="24"
        transform="translate(284 300)"
        fill="none"
      />
    </g>
  </svg>
);

export default LocationIcon;
