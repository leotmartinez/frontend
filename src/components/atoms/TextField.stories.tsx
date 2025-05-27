// src/components/atoms/TextField/TextField.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';
import {Send as SendOutlined } from '@mui/icons-material';

const icon = {
  Enviar: <SendOutlined sx={{ color: 'inherit' }} />, // Ícone de envio
};

const meta: Meta<typeof TextField> = {
  title: 'Components/Atoms/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    label: 'Nome',
    color: 'primary',
    variant: 'outlined',
    fullWidth: true,
    required: false,
    disabled: false,
    helperText: '',
    error: false,
    type: 'text',
    endIcon: null,
    placeholder: '',


    
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
        'inherit',
      ],
      description: 'Cor do campo de texto conforme o tema MUI. Agora inclui cores customizadas softBlue e darkBlue.',
    },
    endIcon: {
      control: { type: 'select' },
      options: Object.keys(icon),
      mapping: icon,
      description: 'Ícone a ser exibido no final do campo de texto.',
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
