import { SVGProps } from 'react';

const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='m18 15-6-6-6 6' stroke={props.color} strokeWidth={1.5} strokeLinejoin='round' />
  </svg>
);

export default SvgChevronUp;
