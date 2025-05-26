// src/components/atoms/Button/Button.stories.tsx

// Importa os tipos Meta e StoryObj do Storybook para tipagem das stories
import type { Meta, StoryObj } from '@storybook/react';
// Importa o componente Button que será documentado/testado
import Button from './Button';
// Importa ícones do Material UI para usar como exemplos nos botões
import {Send as SendOutlined, Save as SaveOutlined } from '@mui/icons-material';
// Importa o componente Button do Material UI

// Define as opções de ícones que podem ser usadas como startIcon ou endIcon
const iconOptions = {
  Nenhum: null,
  Enviar: <SendOutlined />,
  Salvar: <SaveOutlined />,
};

// Define as configurações principais da story do Button
const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button', // Caminho onde o componente aparecerá no Storybook
  component: Button, // Componente a ser documentado
  tags: ['autodocs'], // Tags para geração automática de documentação
  args: { // Valores padrão das props do componente nas stories
    children: 'Clique aqui',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
    startIcon: null,
    endIcon: null,
  
  },
  argTypes: { // Define controles para manipular as props no Storybook
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'softBlue', // cor customizada
        'darkBlue', // cor customizada
        'error',
        'info',
        'success',
        'warning',
        'inherit',
      ],
      description: 'Cor principal do botão conforme o tema MUI. Agora inclui cores customizadas softBlue e darkBlue.',
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
        Enviar: '<SendOutlined />',
        Salvar: '<SaveOutlined />',
      },
    },
    endIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      labels: {
        Nenhum: 'Nenhum',
        Enviar: '<SendOutlined />',
        Salvar: '<SaveOutlined />',
      },
    },
  },
};

// Exporta a configuração meta para o Storybook
export default meta;
// Define o tipo Story baseado no componente Button
type Story = StoryObj<typeof Button>;

// Exporta a story principal chamada Playground, que usa as configurações padrão
export const Playground: Story = {};
