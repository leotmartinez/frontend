// Importa os tipos necessários do Storybook para tipagem das stories
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
  DeleteOutlineOutlined,
  SaveAltOutlined,
} from '@mui/icons-material';
import { Send } from '@mui/icons-material';

// Define as configurações principais do Storybook para o componente
const meta: Meta<typeof IconButtonAtom> = {
  title: 'Components/Atoms/IconButton', // Caminho do componente na árvore do Storybook
  component: IconButtonAtom,            // Componente a ser exibido
  tags: ['autodocs'],                   // Tags para documentação automática
  args: {
    icon: <AddOutlined />,               // Ícone padrão exibido no botão
    label: 'Adicionar',                  // Label padrão (tooltip e aria-label)
    color: 'primary',                    // Cor do botão padrão
    size: 'medium',                      // Tamanho padrão do botão
    disabled: false,                     // Botão habilitado por padrão
    type: 'button',                      // Tipo HTML padrão do botão
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
    icon: <AddOutlined />,   // Ícone de adicionar
    label: 'Adicionar',      // Tooltip e aria-label
  },
};

export const Delete: Story = {
  args: {
    icon: <DeleteOutlineOutlined />, // Ícone de deletar
    label: 'Deletar',
  },
};

export const Edit: Story = {
  args: {
    icon: <ModeEditOutlineOutlined />, // Ícone de editar
    label: 'Editar',
  },
};

export const Archive: Story = {
  args: {
    icon: <ShortTextOutlined />, // Ícone de arquivar
    label: 'Arquivo',
  },
};

export const Like: Story = {
  args: {
    icon: <ThumbUpOutlined />, // Ícone de curtir
    label: 'Curtir',
  },
};

export const Dislike: Story = {
  args: {
    icon: <ThumbDownOutlined />, // Ícone de descurtir
    label: 'Descurtir',
  },
};

export const SendIcon: Story = {
  args: {
    icon: <Send />, // Ícone de enviar
    label: 'Enviar',
  },
};

export const Save: Story = {
  args: {
    icon: <SaveAltOutlined />, // Ícone de salvar
    label: 'Salvar',
  },
};