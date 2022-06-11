import { SVGProps } from 'react';

const SvgBooksFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.4 3.5A1.5 1.5 0 0 1 5.9 2h2.51a1.5 1.5 0 0 1 1.5 1.5v.2H9a1.5 1.5 0 0 0-1.5 1.5v14.7a1.5 1.5 0 0 0 1.18 1.466 1.511 1.511 0 0 1-.27.024H5.9a1.5 1.5 0 0 1-1.5-1.5V3.5Zm8.28.783a1.49 1.49 0 0 0-1.223 1.726l2.468 14.196c.007.04.015.078.025.116a1.5 1.5 0 0 1-1.44 1.079H10a1.5 1.5 0 0 1-1.5-1.5V5.7A1.5 1.5 0 0 1 10 4.2h2.51c.13 0 .257.017.378.048l-.209.035Zm-.266 2.381a1.5 1.5 0 0 1 1.226-1.731l2.366-.405a1.5 1.5 0 0 1 1.731 1.226L20.052 19.3a1.5 1.5 0 0 1-1.226 1.732l-2.365.404a1.5 1.5 0 0 1-1.731-1.226L12.413 6.664Z'
      fill={props.color}
    />
  </svg>
);

export default SvgBooksFilled;
