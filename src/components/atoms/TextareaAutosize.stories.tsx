// src/components/atoms/TextareaAutosize.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import TextareaAutosize from './TextareaAutosize';

const meta: Meta<typeof TextareaAutosize> = {
  title: 'Components/Atoms/TextareaAutosize',
  component: TextareaAutosize,
  tags: ['autodocs'],
  args: {
    placeholder: 'Digite sua mensagem...',
    disabled: false,
    rows: 1,
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    rows: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextareaAutosize>;

export const Playground: Story = {
  render: (args) => <TextareaAutosize {...args} />,
};