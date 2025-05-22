import type { Preview, Decorator } from '@storybook/react';
import React from 'react';
import AppTheme from '../src/components/shared-theme/AppTheme';
import { CssBaseline } from '@mui/material';
// Importa o ColorModeSelect
import ColorModeSelect from '../src/components/shared-theme/ColorModeSelect';

const withMuiTheme: Decorator = (Story) => (
  <AppTheme>
    <CssBaseline />
    {/* Adiciona o seletor de modo de cor acima das stories */}
    <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
      <ColorModeSelect size="small" />
    </div>
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