import * as React from 'react';
import { FC, forwardRef } from 'react';
import { IconProps } from '../../interfaces/icon-props';

const PhoneIcon: FC<IconProps> = (
  { color = 'currentColor', size = 24 },
  ref
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={color}
    viewBox="0 0 24 24"
  >
    <g id="Group_17" data-name="Group 17" transform="translate(-248 -249)">
      <rect
        id="Rectangle_7"
        data-name="Rectangle 7"
        width="24"
        height="24"
        transform="translate(248 249)"
        fill="none"
      />
      <path
        id="phone"
        d="M20.712,15.907l-1.585-1.585a2.537,2.537,0,0,0-3.558-.015A1.551,1.551,0,0,1,13.6,14.5a10.828,10.828,0,0,1-2.984-2.978,1.572,1.572,0,0,1,.2-1.974A2.537,2.537,0,0,0,10.8,6L9.214,4.414a2.532,2.532,0,0,0-3.575,0l-.456.457c-2.378,2.378-2.2,7.378,2.748,12.323,2.983,2.984,5.986,4.234,8.421,4.234a5.4,5.4,0,0,0,3.9-1.485l.457-.457A2.532,2.532,0,0,0,20.712,15.907Zm-1.019,2.559-.457.457c-1.874,1.874-6.009,1.531-10.288-2.748S4.327,7.757,6.2,5.884l.453-.456a1.089,1.089,0,0,1,1.537,0L9.777,7.013a1.089,1.089,0,0,1,.015,1.521,3.013,3.013,0,0,0-.383,3.775,12.258,12.258,0,0,0,3.4,3.391,3.012,3.012,0,0,0,3.77-.373,1.09,1.09,0,0,1,1.526.009l1.585,1.585a1.088,1.088,0,0,1,.006,1.544Z"
        transform="translate(247.302 248.325)"
      />
    </g>
  </svg>
);

export default PhoneIcon;
