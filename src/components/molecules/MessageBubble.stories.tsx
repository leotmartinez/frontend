import type { Meta, StoryObj } from '@storybook/react';
import MessageBubble from './MessageBubble';

const meta: Meta<typeof MessageBubble> = {
  title: 'Components/Molecules/MessageBubble',
  component: MessageBubble,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MessageBubble>;

export const FromUser: Story = {
  args: {
    sender: 'user',
    text: 'Olá, você pode me ajudar?',
  },
};

export const FromAssistant: Story = {
  args: {
    sender: 'assistant',
    text: 'Claro! Qual é a sua dúvida?',
  },
};
