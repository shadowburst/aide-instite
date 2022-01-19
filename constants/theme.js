const colors = Object.freeze({
  transparent: '#00000000',

  black: '#21212a',
  dark_gray: '#282c34',

  dark_red: '#d7424e',
  light_red: '#e06c75',

  dark_green: '#7db356',
  light_green: '#98c379',

  dark_yellow: '#c6803f',
  light_yellow: '#d19a66',

  dark_blue: '#0062f5',
  light_blue: '#4d78cc',

  dark_magenta: '#b450d3',
  light_magenta: '#c678dd',

  dark_cyan: '#3d9ca9',
  light_cyan: '#56b6c2',

  light_gray: '#abb2bf',
  white: '#ffffff',
});

const theme = Object.freeze({
  dark: false,
  activeOpacity: 0.7,
  colors: {
    primary: colors.dark_cyan,
    secondary: colors.light_blue,
    success: colors.light_green,
    warning: colors.light_yellow,
    danger: colors.light_red,
    background: colors.black,
    card: colors.dark_gray,
    text: colors.light_gray,
    border: colors.light_gray,
    notification: colors.light_red,
    ...colors,
  },
});

export default theme;
