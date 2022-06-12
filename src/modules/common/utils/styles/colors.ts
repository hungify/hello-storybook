export type ColorKey =
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'teal'
  | 'blueLight'
  | 'greenLight'
  | 'yellowLight'
  | 'orangeLight'
  | 'tealLight'
  | 'primary'
  | 'black'
  | 'white'
  | 'tealDark'
  | 'red'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4'
  | 'gray5'
  | 'redLight'
  | 'redDark'
  | 'greenDark';

export type Color = {
  [key in ColorKey]: string;
};

const colors: Color = {
  primary: '#32AB54',
  black: '#000',
  white: '#FFF',
  tealDark: '#344A4F',

  red: '#D42211',
  redLight: '#FDEBEB',
  redDark: '#BD1A0B',
  yellow: '#CB9E14',
  yellowLight: '#FFF9E6',
  blue: '#004CDE',
  blueLight: '#EBF1FC',
  orange: '#E06C00',
  orangeLight: '#FFF4EB',
  green: '#2C9E8A',
  greenLight: '#EAF5F3',
  greenDark: '#277E3F',
  teal: '#3B6168',
  tealLight: '#ECEEF0',

  gray1: '#333',
  gray2: '#4F4F4F',
  gray3: '#828282',
  gray4: '#CACACA',
  gray5: '#E0E0E0',
};

export default colors;
