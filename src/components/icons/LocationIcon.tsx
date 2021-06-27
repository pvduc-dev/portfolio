import * as React from 'react';
import { forwardRef } from 'react';
import { IconProps } from '../../interfaces/icon-props';

const LocationIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 24 }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <g id="Group_26" data-name="Group 26" transform="translate(-82 -275)">
        <g id="location" transform="translate(44.549 275)">
          <path
            id="Path_73"
            data-name="Path 73"
            d="M56.779,2.973a10.151,10.151,0,0,0-17.328,7.178c0,5.485,5.186,10.047,7.972,12.5.387.341.722.635.988.884a1.749,1.749,0,0,0,2.381,0c.266-.249.6-.543.988-.884,2.786-2.451,7.972-7.013,7.972-12.5A10.085,10.085,0,0,0,56.779,2.973Zm-5.928,18.62c-.4.348-.737.649-1.019.912a.339.339,0,0,1-.462,0c-.282-.263-.623-.564-1.019-.912-2.619-2.3-7.5-6.593-7.5-11.442a8.745,8.745,0,0,1,17.49,0C58.347,15,53.471,19.289,50.852,21.593Z"
          />
          <path
            id="Path_74"
            data-name="Path 74"
            d="M165.043,112.938a4.473,4.473,0,1,0,4.473,4.473A4.478,4.478,0,0,0,165.043,112.938Zm0,7.541a3.067,3.067,0,1,1,3.067-3.067A3.071,3.071,0,0,1,165.043,120.479Z"
            transform="translate(-115.442 -107.644)"
          />
        </g>
        <rect
          id="Rectangle_7"
          data-name="Rectangle 7"
          width="24"
          height="24"
          transform="translate(82 275)"
          fill="none"
        />
      </g>
    </svg>
  )
);

export default LocationIcon;
