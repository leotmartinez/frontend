// src/components/atoms/TextField/TextField.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/Atoms/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    label: 'Nome',
    variant: 'outlined',
    fullWidth: true,
    required: false,
    disabled: false,
    helperText: '',
    error: false,
    type: 'text',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    label: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Playground: Story = {};
