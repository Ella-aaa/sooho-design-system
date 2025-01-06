/** @type { import('@storybook/react').Preview } */
import { themes } from "@storybook/theming";
import { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
