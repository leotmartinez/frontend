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

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;