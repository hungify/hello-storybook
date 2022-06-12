const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '500px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const mediaQueries = {
  mobileUpS: `max-width: ${size.mobileS}`,
  mobileUpM: `max-width: ${size.mobileM}`,
  mobileUpL: `max-width: ${size.mobileL}`,
  tabletUp: `max-width: ${size.tablet}`,
  laptopUp: `max-width: ${size.laptop}`,
  laptopUpL: `max-width: ${size.laptopL}`,
  desktopUp: `max-width: ${size.desktop}`,
};

export default mediaQueries;
