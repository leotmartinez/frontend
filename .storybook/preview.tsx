<<<<<<< HEAD
import type { Preview, Decorator } from '@storybook/react';
import React from 'react';
import AppTheme from '../src/components/shared-theme/AppTheme';
import { CssBaseline } from '@mui/material';
import ColorModeSelect from '../src/components/shared-theme/ColorModeSelect';

const withMuiTheme: Decorator = (Story) => (
  <AppTheme>
    <CssBaseline />
    <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
      <ColorModeSelect size="small" />
    </div>
    <Story />
  </AppTheme>
);
=======
// // .storybook/preview.tsx
// import React from 'react';
// import type { Preview } from '@storybook/react';
// import AppTheme from '../src/components/shared-theme/AppTheme'; // ajusta o caminho conforme seu projeto

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
//   decorators: [
//     (Story) => (
//       <AppTheme>
//         <Story />
//       </AppTheme>
//     ),
//   ],
// };

// export default preview;



import type { Preview } from '@storybook/react'
>>>>>>> origin/main

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
<<<<<<< HEAD
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withMuiTheme],
=======
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
>>>>>>> origin/main
};

export default preview;