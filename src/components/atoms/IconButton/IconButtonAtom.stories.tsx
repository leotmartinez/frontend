import type { Meta } from '@storybook/react';
import type { StoryObj } from '@storybook/react';
import IconButtonAtom from './IconButtonAtom';
import { AddOutlined, ModeEditOutlineOutlined, ShortTextOutlined, ThumbUpOutlined, ThumbDownOutlined,DeleteOutlineOutlined } from '@mui/icons-material';

const meta: Meta<typeof IconButtonAtom> = {
  title: 'Components/Atoms/IconButton',
  component: IconButtonAtom,
  tags: ['autodocs'],
  args: {
    icon: <AddOutlined />,
    label: 'Adicionar',
    color: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button',
  },
  argTypes: {
    color: {//aceita só valores predefinidos do MUI
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    iconColor: {//aceita valores hexadecimais, rgb, hsl ou nomes de cores do MUI que estão no tema 
      control: { type: 'select' },
      options: ['primary.50', 'softBlue.200', 'darkBlue.500'],
      description: 'Cor do ícone',
    },
  },
};
export default meta;
type Story = StoryObj<typeof IconButtonAtom>;

export const Add: Story = {
  args: {
    icon: <AddOutlined />,
    label: 'Adicionar',
    iconColor: 'darkBlue.500',
  },
};

export const Delete: Story = {
    args: {
        icon: <DeleteOutlineOutlined />,
        label: 'Deletar',
        iconColor: 'primary.50',
    },
}

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