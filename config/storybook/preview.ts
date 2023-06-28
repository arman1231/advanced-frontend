import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-styling';
import '../../src/app/styles/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    decorators: [
      withThemeByClassName({
      themes: {
      light: 'app light',
      dark: 'app dark',
      },
      defaultTheme: 'light',
      }),
      ],
  },
};

export default preview;
