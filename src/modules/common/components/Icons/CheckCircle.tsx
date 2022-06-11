import { SVGProps } from 'react';

const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d='M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.413-9.706a.6.6 0 1 0-.847-.85l-3.855 3.838-1.275-1.29a.6.6 0 0 0-.853.843l1.698 1.719a.6.6 0 0 0 .85.003l4.282-4.263Z'
      fill={props.color}
    />
  </svg>
);

export default SvgCheckCircle;
