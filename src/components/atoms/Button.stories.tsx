// src/components/atoms/Button/Button.stories.tsx

// Importa os tipos Meta e StoryObj do Storybook para tipagem das stories
import type { Meta, StoryObj } from '@storybook/react';
// Importa o componente Button que será documentado/testado
import Button from './Button';
// Importa ícones do Material UI para usar como exemplos nos botões
import IconButtonAtom from './IconButton/IconButtonAtom'; // Importa o componente IconButtonAtom que será usado como exemplo
import Send from '@mui/icons-material/Send';
import SaveOutlined from '@mui/icons-material/SaveOutlined';


// Define as opções de ícones que podem ser usadas como startIcon ou endIcon
// Corrigido: agora são apenas elementos de ícone, não componentes de botão
const iconOptions = {
  Nenhum: null, // Sem ícone
  Enviar: <Send />, // Ícone de enviar
  Salvar: <SaveOutlined />, // Ícone de salvar
};

// Define as configurações principais da story do Button
const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button', // Caminho onde o componente aparecerá no Storybook
  component: Button, // Componente a ser documentado
  tags: ['autodocs'], // Tags para geração automática de documentação
  args: { // Valores padrão das props do componente nas stories
    children: 'Clique aqui', // Texto padrão do botão
    variant: 'contained',    // Variante padrão
    color: 'primary',        // Cor padrão
    size: 'medium',          // Tamanho padrão
    disabled: false,         // Habilitado por padrão
    type: 'button',          // Tipo HTML padrão
    startIcon: null,         // Sem ícone à esquerda por padrão
    endIcon: null,           // Sem ícone à direita por padrão
  },
  argTypes: { // Define controles para manipular as props no Storybook
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
      description: 'Cor principal do botão conforme o tema MUI',
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
        Enviar: '<Send />',
        Salvar: '<SaveOutlined />',
      },
      description: 'Ícone à esquerda do texto do botão.'
    },
    endIcon: {
      control: { type: 'select' },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      labels: {
        Nenhum: 'Nenhum',
        Enviar: '<Send />',
        Salvar: '<SaveOutlined />',
      },
      description: 'Ícone à direita do texto do botão.'
    },
  },
};

// Exporta a configuração meta para o Storybook
export default meta;
// Define o tipo Story baseado no componente Button
type Story = StoryObj<typeof Button>;

// Exporta a story principal chamada Playground, que usa as configurações padrão
export const Playground: Story = {};

// Exemplo de composição de átomos: usando IconButtonAtom como children do Button
// Isso é uma boa prática quando você quer um botão de ação com acessibilidade e tooltip customizados
export const ComIconButtonAtom: Story = {
  args: {
    children: <IconButtonAtom icon={<Send />} label="Enviar" color="primary" />, // Componente customizado como filho
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
    startIcon: null,
    endIcon: null,
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso do seu IconButtonAtom como filho do Button. Útil para composições avançadas, acessibilidade ou quando você quer um botão com tooltip e ícone customizado.'
      }
    }
  }
};
