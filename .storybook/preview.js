import 'bootstrap/dist/css/bootstrap.min.css';
import formvikTheme from './formvikTheme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      docs: {
        theme: formvikTheme
      }
    },
  },
};

export default preview;
