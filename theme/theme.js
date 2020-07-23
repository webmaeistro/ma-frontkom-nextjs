const colors = {
  black: '#283C64',
  white: '#fff',
  grayscale: {
    400: '#d2d2d2'
  },
  brand: '#79cdcd',
  cta: '#f7935a',
  link: '#1755b7',
  projects: {
    paper: '#487ff7',
    nourish: '#77d27f',
    unight: '#a24ea8',
    yoga: '#e74069',
    sayme: '#ec8453',
    aviapark: '#e85a7e',
    officecl: '#e5eff4'
  },
  error: '#ff4d4d',
  success: '#75de50'
};

const fonts = {
  title: 'adelle-sans',
  bodyText: 'adelle-sans'
};

const fontSizes = {
  l: 23,
  m: 20,
  s: 16,
  xs: 15,
  heading: {
    h1: 182,
    h2: 101,
    h3: 79,
    h4: 47,
    h5: 29
  }
};

const lineHeights = {
  l: 1.5,
  heading: {
    h1: 0.81,
    h2: 1.06,
    h3: 1.14,
    h4: 1.25,
    h5: 1.32
  }
};

const breakpointsObject = {
  s: '468px',
  m: '992px',
  l: '1226px'
};

const breakpoints = [breakpointsObject.s, breakpointsObject.m, breakpointsObject.l];

const space = {
  xxl: 48,
  xl: 40,
  l: 32,
  m: 24,
  s: 16,
  xs: 8
};

module.exports = {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  breakpointsObject,
  breakpoints,
  space
};
