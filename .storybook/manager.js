import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Shakti Prasad Hota Components',
    brandUrl: 'https://strikzesports.in',
  },
});
