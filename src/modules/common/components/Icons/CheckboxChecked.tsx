import { SVGProps } from 'react';

const SvgCheckboxChecked = (props: SVGProps<SVGSVGElement>) => (
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
      d='M9 4a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H9Zm1.5 9.19 4.72-4.72a.75.75 0 0 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 1.06-1.06l1.72 1.72Z'
      fill={props.color}
    />
  </svg>
);

export default SvgCheckboxChecked;
