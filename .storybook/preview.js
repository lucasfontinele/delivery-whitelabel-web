import '!style-loader!css-loader!sass-loader!../src/styles/base/_reset.scss';

const customViewports = {
  name: 'iPhone 12 Pro',
  styles: {
    width: 390,
    height: 844,
  },
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: 'iPhone 12 Pro',
    viewPorts: {
      ...customViewports,
    }
  }
}
