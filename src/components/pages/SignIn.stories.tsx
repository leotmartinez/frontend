// src/pages/SignIn.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import SignIn from './SignIn';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const meta: Meta<typeof SignIn> = {
  title: 'Components/Pages/SignIn',
  component: SignIn,
  decorators: [
    (Story) => (
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SignIn>;

export const Default: Story = {};
