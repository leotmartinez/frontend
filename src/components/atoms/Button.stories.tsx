// src/components/atoms/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';

const iconOptions = {
  Nenhum: null,
  Enviar: <SendIcon />,
  Salvar: <SaveIcon />,
};

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Clique aqui',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
    startIcon: null,
    endIcon: null,
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'outlined', 'contained'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    startIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      labels: {
        Nenhum: 'Nenhum',
        Enviar: '<SendIcon />',
        Salvar: '<SaveIcon />',
      },
    },
    endIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      labels: {
        Nenhum: 'Nenhum',
        Enviar: '<SendIcon />',
        Salvar: '<SaveIcon />',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};
