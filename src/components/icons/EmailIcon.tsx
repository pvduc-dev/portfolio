import * as React from 'react';
import { forwardRef } from 'react';
import { IconProps } from '../../interfaces/icon-props';

const EmailIcon = forwardRef<SVGSVGElement, IconProps>(({ color= 'currentColor', size = 24 }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <g id="Group_20" data-name="Group 20" transform="translate(-129 -114)">
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="24"
        height="24"
        transform="translate(129 114)"
        fill="none"
      />
      <g id="email" transform="translate(129 49)">
        <path
          id="Path_69"
          data-name="Path 69"
          d="M21.188,68H2.813A2.816,2.816,0,0,0,0,70.813v12a2.816,2.816,0,0,0,2.813,2.813H21.188A2.816,2.816,0,0,0,24,82.813v-12A2.816,2.816,0,0,0,21.188,68Zm.938,14.813a.939.939,0,0,1-.937.938H2.813a.939.939,0,0,1-.937-.937v-12a.939.939,0,0,1,.938-.937H21.188a.939.939,0,0,1,.938.938Z"
        />
        <path
          id="Path_70"
          data-name="Path 70"
          d="M40.573,92.937l-9.966,7.413-9.966-7.413-1.119,1.5,11.085,8.245,11.085-8.245Z"
          transform="translate(-18.607 -23.768)"
        />
      </g>
    </g>
  </svg>
));

export default EmailIcon;
