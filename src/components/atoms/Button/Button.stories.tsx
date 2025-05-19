// src/components/atoms/Button/Button.stories.tsx

// Importa os tipos Meta e StoryObj do Storybook para tipagem das stories
import type { Meta, StoryObj } from '@storybook/react';
// Importa o componente Button que será documentado/testado
import Button from './Button';
// Importa ícones do Material UI para usar como exemplos nos botões
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';

// Define as opções de ícones que podem ser usadas como startIcon ou endIcon
const iconOptions = {
  Nenhum: null,
  Enviar: <SendIcon />,
  Salvar: <SaveIcon />,
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

// Exporta a configuração meta para o Storybook
export default meta;
// Define o tipo Story baseado no componente Button
type Story = StoryObj<typeof Button>;

// Exporta a story principal chamada Playground, que usa as configurações padrão
export const Playground: Story = {};
