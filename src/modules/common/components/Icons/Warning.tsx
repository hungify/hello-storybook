import { SVGProps } from 'react';

const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
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
      d='m11.284 4.442-7.199 14.4A.8.8 0 0 0 4.801 20h14.398a.8.8 0 0 0 .715-1.158l-7.199-14.4a.8.8 0 0 0-1.43 0Zm.078 7.352h1.274v3.398h-1.274v-3.398Zm0 4.53h1.274v1.132h-1.274v-1.132Z'
      fill={props.color}
    />
  </svg>
);

export default SvgWarning;
