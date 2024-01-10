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
    options: {
      storySort: {
        order: ['Introduction', ['Using Preset Config','Injecting Custom Config'], 'Fields', 'Actions', ['Submit', 'Reset'], 'Presets'],
      },
    }
  },
};

export default preview;
