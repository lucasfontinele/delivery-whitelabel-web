export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    family:
      "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weights: {
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
    content: {
      xsmall: '1.2rem',
      small: '1.4rem',
      regular: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem',
    },
    heading: {
      xsmall: '2.2rem',
      small: '3.0rem',
      regular: '3.6rem',
      large: '4.0rem',
      xlarge: '4.8rem',
      xxlarge: '6.4rem',
      xxxlarge: '7.2rem',
    },
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    disabled: '#BDBDBD',

    primary: '#1D71B8',

    neutral: {
      light: '#F2F2F2',
      medium: '#CCCCCC',
      dark: '#666666',
      darkest: '#171717',
      background: '#FFFFFF',
    },

    feedback: {
      success: '#2FAB67',
      error: '#EB5757',
      info: '#3498db',
      warning: '#f1c40f',
    },
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1.2rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '8.0rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const;
