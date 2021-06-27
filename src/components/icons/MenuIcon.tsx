import * as React from 'react';
import { forwardRef, LegacyRef, PropsWithRef } from 'react';

interface IconProps extends PropsWithRef<any> {
  color?: string;
  size?: string | number;
}

const MenuIcon = forwardRef<SVGSVGElement, IconProps>(
  (
    { color = 'currentColor', size = 24, ...rest },
    ref: LegacyRef<SVGSVGElement>
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 24 24"
      >
        <g id="menu" transform="translate(-4.727 -93.107)">
          <g
            id="Group_15"
            data-name="Group 15"
            transform="translate(4.727 96.03)"
          >
            <path
              id="Path_66"
              data-name="Path 66"
              d="M.75,98.494h22.5c.414,0,.75-.5.75-1.126s-.336-1.126-.75-1.126H.75c-.414,0-.75.5-.75,1.126S.336,98.494.75,98.494Z"
              transform="translate(0 -96.243)"
            />
            <path
              id="Path_67"
              data-name="Path 67"
              d="M23.25,180.455H.75c-.414,0-.75.5-.75,1.126s.336,1.126.75,1.126h22.5c.414,0,.75-.5.75-1.126S23.664,180.455,23.25,180.455Z"
              transform="translate(0 -164.336)"
            />
            <path
              id="Path_68"
              data-name="Path 68"
              d="M136.053,264.667h-15c-.414,0-.75.5-.75,1.126s.336,1.126.75,1.126h15c.414,0,.75-.5.75-1.126S136.467,264.667,136.053,264.667Z"
              transform="translate(-112.803 -256.607)"
            />
          </g>
          <rect
            id="Rectangle_4"
            data-name="Rectangle 4"
            width="24"
            height="24"
            transform="translate(4.727 93.107)"
            fill="none"
          />
        </g>
      </svg>
    );
  }
);

export default MenuIcon;
