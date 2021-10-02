import * as React from 'react';
import { FC } from 'react';
import { Icon } from '../../interfaces/icon';

const EmailIcon: FC<Icon> = ({ color = 'currentColor', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
  >
    <g id="Group_28" data-name="Group 28" transform="translate(-254 -19)">
      <g id="mail" transform="translate(254 -53)">
        <g
          id="Group_21"
          data-name="Group 21"
          transform="translate(16.51 77.206)"
        >
          <g id="Group_20" data-name="Group 20">
            <path
              id="Path_73"
              data-name="Path 73"
              d="M359.49,101.721l-7.279,7.232,7.279,7.232a2.085,2.085,0,0,0,.211-.9V102.625A2.085,2.085,0,0,0,359.49,101.721Z"
              transform="translate(-352.211 -101.721)"
            />
          </g>
        </g>
        <g id="Group_23" data-name="Group 23" transform="translate(1.206 76)">
          <g id="Group_22" data-name="Group 22">
            <path
              id="Path_74"
              data-name="Path 74"
              d="M46.406,76H26.625a2.085,2.085,0,0,0-.9.211l9.3,9.256a2.111,2.111,0,0,0,2.983,0l9.3-9.256A2.085,2.085,0,0,0,46.406,76Z"
              transform="translate(-25.721 -76)"
            />
          </g>
        </g>
        <g id="Group_25" data-name="Group 25" transform="translate(0 77.206)">
          <g id="Group_24" data-name="Group 24">
            <path
              id="Path_75"
              data-name="Path 75"
              d="M.211,101.721a2.085,2.085,0,0,0-.211.9v12.656a2.085,2.085,0,0,0,.211.9l7.279-7.232Z"
              transform="translate(0 -101.721)"
            />
          </g>
        </g>
        <g
          id="Group_27"
          data-name="Group 27"
          transform="translate(1.206 85.432)"
        >
          <g id="Group_26" data-name="Group 26">
            <path
              id="Path_76"
              data-name="Path 76"
              d="M40.031,277.211,39,278.241a3.519,3.519,0,0,1-4.971,0L33,277.211l-7.279,7.232a2.085,2.085,0,0,0,.9.211H46.406a2.085,2.085,0,0,0,.9-.211Z"
              transform="translate(-25.721 -277.211)"
            />
          </g>
        </g>
      </g>
      <rect
        id="Rectangle_10"
        data-name="Rectangle 10"
        width="24"
        height="24"
        transform="translate(254 19)"
        fill="none"
      />
    </g>
  </svg>
);
export default EmailIcon;
