import type { SVGProps } from "react";

export const SvgBlockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#blockIcon_svg__a)">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20"
      />
      <path stroke="currentColor" strokeWidth={2.3} d="m7.043 19.362 10-15" />
    </g>
    <defs>
      <clipPath id="blockIcon_svg__a">
        <path  fill="currentColor"  d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
