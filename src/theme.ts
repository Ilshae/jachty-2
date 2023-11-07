export const theme = {
  colors: {
    primary: "#0A2760",
    primary75: "#0A2760BF",
    primary20: "#0A276020",
    primary10: "#0A276010",
    secondary: "#e3ab4f",
    secondary60: "#e3ab4f60",
    light: "#fff",
    light50: "#ffffff50",
    dark: "#020203",
  },
  fonts: {
    text: "'Oswald', serif",
    action: "'Roboto', sans-serif",
    special: "'Courgette', cursive",
  },
  screenSizes: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },
}

export const device = {
  mobileS: `(min-width: ${theme.screenSizes.mobileS})`,
  mobileM: `(min-width: ${theme.screenSizes.mobileM})`,
  mobileL: `(min-width: ${theme.screenSizes.mobileL})`,
  tablet: `(min-width: ${theme.screenSizes.tablet})`,
  laptop: `(min-width: ${theme.screenSizes.laptop})`,
  laptopL: `(min-width: ${theme.screenSizes.laptopL})`,
  desktop: `(min-width: ${theme.screenSizes.desktop})`,
  desktopL: `(min-width: ${theme.screenSizes.desktop})`,
}
