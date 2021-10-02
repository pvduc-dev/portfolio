import * as React from 'react';
import { FC } from 'react';
import { Icon } from '../../interfaces/icon';

const LocationIcon: FC<Icon> = ({ color = 'currentColor', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
  >
    <g id="Group_38" data-name="Group 38" transform="translate(-78 -88)">
      <g id="location_1_" data-name="location (1)" transform="translate(48 88)">
        <g id="Group_35" data-name="Group 35" transform="translate(33.933)">
          <g id="Group_34" data-name="Group 34">
            <path
              id="Path_79"
              data-name="Path 79"
              d="M99.067,0A7.9,7.9,0,0,0,91,7.734a7.5,7.5,0,0,0,1.51,4.5l5.94,8.887a.751.751,0,0,0,1.235,0l5.965-8.917a7.485,7.485,0,0,0,1.484-4.47A7.915,7.915,0,0,0,99.067,0Zm0,11.25A3.6,3.6,0,0,1,95.4,7.734a3.67,3.67,0,0,1,7.333,0A3.6,3.6,0,0,1,99.067,11.25Z"
              transform="translate(-91)"
            />
          </g>
        </g>
        <g id="Group_37" data-name="Group 37" transform="translate(31 16.158)">
          <g id="Group_36" data-name="Group 36">
            <path
              id="Path_80"
              data-name="Path 80"
              d="M47.733,344.7,44.04,350.23a2.482,2.482,0,0,1-4.081,0l-3.7-5.535c-3.254.721-5.26,2.043-5.26,3.622,0,2.74,5.668,4.219,11,4.219s11-1.478,11-4.219C53,346.738,50.991,345.416,47.733,344.7Z"
              transform="translate(-31 -344.695)"
            />
          </g>
        </g>
      </g>
      <rect
        id="Rectangle_12"
        data-name="Rectangle 12"
        width="24"
        height="24"
        transform="translate(78 88)"
        fill="none"
      />
    </g>
  </svg>
);

export default LocationIcon;
