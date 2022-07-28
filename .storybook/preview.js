import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global';

const customViewports = {
  mobile: {
    name: 'Iphone 12 Pro',
    styles: {
      height: '844px',
      width: '390px',
    },
    type: 'mobile',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: 'mobile',
    layout: 'fullscreen',
    viewports: {
      ...customViewports,
    },
  },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
