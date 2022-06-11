import { SVGProps } from 'react';

const SvgBell = (props: SVGProps<SVGSVGElement>) => (
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
      d='M12.84 3.882a1.198 1.198 0 0 0-.87-.381 1.175 1.175 0 0 0-.47.106 1.232 1.232 0 0 0-.395.289 1.31 1.31 0 0 0-.26.426c-.06.158-.09.328-.087.499-.004.06-.004.12 0 .18a5.197 5.197 0 0 0-2.622 1.982 5.68 5.68 0 0 0-1.003 3.238v2.67a5.353 5.353 0 0 1-1.43 3.65.863.863 0 0 0-.182.283.902.902 0 0 0-.063.337.923.923 0 0 0 .24.628.83.83 0 0 0 .272.194c.102.045.21.068.32.068h11.406c.11 0 .22-.023.321-.068a.831.831 0 0 0 .271-.194.925.925 0 0 0 .24-.629.904.904 0 0 0-.062-.336.863.863 0 0 0-.183-.283 5.353 5.353 0 0 1-1.43-3.65V10a5.44 5.44 0 0 0-.356-1.994 5.214 5.214 0 0 0-1.054-1.696A4.675 4.675 0 0 0 13.2 4.97a.527.527 0 0 0 0-.17c0-.345-.13-.676-.36-.92Zm-2.411-1.36c.45-.34.988-.522 1.54-.521a2.55 2.55 0 0 1 1.573.498c.461.338.809.822.993 1.382a6.406 6.406 0 0 1 2.759 2.462A6.935 6.935 0 0 1 18.32 10v2.85c0 .97.364 1.902 1.012 2.59.318.332.534.757.623 1.22.088.462.044.942-.126 1.378-.17.436-.46.809-.832 1.071a2.168 2.168 0 0 1-1.255.4H6.291a2.175 2.175 0 0 1-1.265-.387c-.376-.26-.67-.63-.846-1.067a2.515 2.515 0 0 1-.14-1.384c.084-.465.298-.894.613-1.231.324-.339.582-.742.757-1.187.176-.445.266-.921.266-1.403v-2.63a7.355 7.355 0 0 1 1.033-3.74 6.82 6.82 0 0 1 2.753-2.59c.18-.552.517-1.031.967-1.37ZM13.2 21.25c.125-.228.19-.487.19-.75h-2.84c-.001.263.064.522.19.75.124.228.303.418.52.55a1.362 1.362 0 0 0 1.42 0c.216-.132.396-.322.52-.55Z'
      fill={props.color}
    />
  </svg>
);

export default SvgBell;
