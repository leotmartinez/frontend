import type { Preview, Decorator } from '@storybook/react';
import React from 'react';
import AppTheme from '../src/components/shared-theme/AppTheme';
import { CssBaseline } from '@mui/material';

const withMuiTheme: Decorator = (Story) => (
  <AppTheme>
    <CssBaseline />
    <Story />
  </AppTheme>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withMuiTheme],
};

export default preview;