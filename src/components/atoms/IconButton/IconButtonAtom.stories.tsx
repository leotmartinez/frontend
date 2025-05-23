// Importa os tipos necessários do Storybook
import type { Meta } from '@storybook/react';
import type { StoryObj } from '@storybook/react';
// Importa o componente a ser documentado/testado
import IconButtonAtom from './IconButtonAtom';
// Importa ícones do Material UI para usar nos exemplos
import { 
  AddOutlined, 
  ModeEditOutlineOutlined, 
  ShortTextOutlined, 
  ThumbUpOutlined, 
  ThumbDownOutlined, 
  DeleteOutlineOutlined 
} from '@mui/icons-material';

// Define as configurações principais do Storybook para o componente
const meta: Meta<typeof IconButtonAtom> = {
  title: 'Components/Atoms/IconButton', // Caminho do componente na árvore do Storybook
  component: IconButtonAtom,            // Componente a ser exibido
  tags: ['autodocs'],                   // Tags para documentação automática
  args: {
    icon: <AddOutlined />,               // Ícone padrão
    label: 'Adicionar',                  // Label padrão
    color: 'primary',                    // Cor do botão padrão
    size: 'medium',                      // Tamanho padrão
    disabled: false,                     // Habilitado por padrão
    type: 'button',                      // Tipo HTML padrão
    iconColor: 'common.white',           // Cor padrão do ícone
  },
  argTypes: {
    color: {
      control: { type: 'select' },       // Controlador do Storybook (dropdown)
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
      description: 'Cor do botão conforme as opções predefinidas do MUI.',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do botão.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desativa o botão se verdadeiro.',
    },
    label: {
      control: 'text',
      description: 'Texto descritivo do botão (importante para acessibilidade).',
    },
    iconColor: {
      control: { type: 'select' },  // Controlador para selecionar cor do ícone
      options: ['primary.50', 'softBlue.200', 'darkBlue.500', 'common.white'], // Apenas cores permitidas
      description: 'Cor do ícone. Aceita valores específicos do tema.',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Tipo do botão HTML.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonAtom>;

// Exemplos de uso do componente com diferentes ícones e labels
export const Add: Story = {
  args: {
    icon: <AddOutlined />,
    label: 'Adicionar',
  },
};

export const Delete: Story = {
  args: {
    icon: <DeleteOutlineOutlined />,
    label: 'Deletar',
  },
};

export const Edit: Story = {
  args: {
    icon: <ModeEditOutlineOutlined />,
    label: 'Editar',
  },
};

export const Archive: Story = {
  args: {
    icon: <ShortTextOutlined />,
    label: 'Arquivo',
  },
};

export const Like: Story = {
  args: {
    icon: <ThumbUpOutlined />,
    label: 'Curtir',
  },
};

export const Dislike: Story = {
  args: {
    icon: <ThumbDownOutlined />,
    label: 'Descurtir',
  },
};