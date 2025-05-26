import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const meta: Meta<typeof LoginForm> = {
  title: 'Components/Organisms/LoginForm',
  component: LoginForm,
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
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
