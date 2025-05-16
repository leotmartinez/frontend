// src/components/atoms/Box/Box.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Components/Atoms/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    component: 'div',
    sx: {
      p: 2,
      border: '1px dashed grey',
      bgcolor: 'background.paper',
      color: 'text.primary',
    },
    children: 'Conteúdo dentro do Box',
  },
  argTypes: {
    component: {
      control: { type: 'select' },
      options: ['div', 'section', 'article', 'span'],
    },
    sx: {
      control: 'object',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Playground: Story = {};
