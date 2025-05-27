// src/components/atoms/CircularProgress.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import CircularProgress from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Components/Atoms/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
  args: {
    color: 'primary',
    size: 40,
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    size: {
      control: { type: 'number' },
    },
    thickness: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Playground: Story = {};
