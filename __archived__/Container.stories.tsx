// src/components/atoms/Container/Container.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';
import Box from '@mui/material/Box';

const meta: Meta<typeof Container> = {
  title: 'Components/Atoms/Container',
  component: Container,
  tags: ['autodocs'],
  args: {
    maxWidth: 'md',
    disableGutters: false,
    fixed: false,
    children: (
      <Box sx={{ bgcolor: '#cfe8fc', height: '100px' }}>
        Conteúdo dentro do Container
      </Box>
    ),
  },
  argTypes: {
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
    },
    disableGutters: {
      control: 'boolean',
    },
    fixed: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Playground: Story = {};
