import { SVGProps } from 'react';

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M19.816 10.2a.355.355 0 0 0-.088-.074l-1.024-.92-.072-.066-.152-.117-5.072-4.478A2.107 2.107 0 0 0 12 4c-.517 0-1.016.193-1.408.545L5.52 9.023l-.152.117-.072.067-1.024.919-.088.075a.628.628 0 0 0-.184.46.69.69 0 0 0 .104.358l.088.109a.61.61 0 0 0 .776.067l.088-.05.24-.21v7.578c0 .39.148.765.412 1.043.264.277.622.433.996.436H9.48c.374-.003.732-.16.996-.436.264-.277.412-.652.412-1.043v-3.342c0-.044.017-.086.047-.118a.157.157 0 0 1 .113-.049h1.904a.165.165 0 0 1 .114.055.18.18 0 0 1 .046.12v3.342c0 .39.147.763.409 1.04s.618.435.99.439h2.793c.373-.004.729-.162.99-.439.263-.277.41-.65.41-1.04v-7.61l.24.209.088.075a.61.61 0 0 0 .776-.067l.088-.109a.69.69 0 0 0 .059-.609.612.612 0 0 0-.14-.21Zm-2.352 8.288a.185.185 0 0 1-.044.127.17.17 0 0 1-.116.057h-2.792a.174.174 0 0 1-.114-.06.188.188 0 0 1-.046-.124v-3.342a1.517 1.517 0 0 0-.104-.562 1.466 1.466 0 0 0-.303-.477 1.397 1.397 0 0 0-.456-.319 1.349 1.349 0 0 0-.537-.112h-1.904c-.185 0-.369.038-.54.113-.17.074-.325.184-.456.321-.13.138-.233.3-.302.48-.07.18-.104.371-.102.565v3.341a.188.188 0 0 1-.049.127.173.173 0 0 1-.119.057H6.704a.163.163 0 0 1-.122-.054.178.178 0 0 1-.046-.13v-8.68l4.856-4.294A.92.92 0 0 1 12 5.291a.92.92 0 0 1 .608.231l4.856 4.294v8.672Z'
      fill={props.color}
    />
  </svg>
);

export default SvgHome;
