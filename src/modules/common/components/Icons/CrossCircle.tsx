import { SVGProps } from 'react';

const SvgCrossCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.47 15.53a.75.75 0 0 1 0-1.06L10.94 12 8.47 9.53a.75.75 0 0 1 1.06-1.06L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 1 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06 0Z'
      fill={props.color}
    />
  </svg>
);

export default SvgCrossCircle;
