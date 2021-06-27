import * as React from 'react';
import { forwardRef } from 'react';
import { IconProps } from '../../interfaces/icon-props';

const PlaceholderIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 24 }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill={color}
      viewBox="0 0 24 24"
    >
      <g id="Group_25" data-name="Group 25" transform="translate(-178 -693)">
        <g id="placeholder" transform="translate(117 693)">
          <path
            id="Path_71"
            data-name="Path 71"
            d="M73,0a9.009,9.009,0,0,0-9,9c0,6.238,8.124,14.434,8.469,14.781a.753.753,0,0,0,1.062,0C73.876,23.434,82,15.238,82,9A9.009,9.009,0,0,0,73,0Zm0,22.166c-1.791-1.917-7.5-8.4-7.5-13.166a7.5,7.5,0,0,1,15,0C80.5,13.761,74.791,20.248,73,22.166Z"
          />
          <path
            id="Path_72"
            data-name="Path 72"
            d="M164.5,96a4.5,4.5,0,1,0,4.5,4.5A4.505,4.505,0,0,0,164.5,96Zm0,7.5a3,3,0,1,1,3-3A3,3,0,0,1,164.5,103.5Z"
            transform="translate(-91.5 -91.5)"
          />
        </g>
        <rect
          id="Rectangle_6"
          data-name="Rectangle 6"
          width="24"
          height="24"
          transform="translate(178 693)"
          fill="none"
        />
      </g>
    </svg>
  )
);

export default PlaceholderIcon;
