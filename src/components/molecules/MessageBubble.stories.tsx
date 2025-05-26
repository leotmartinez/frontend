import type { Meta } from '@storybook/react';
import type { StoryObj } from '@storybook/react';
import MessageBubble from './MessageBubble';
import type { MessageBubbleProps } from './MessageBubble';

const meta: Meta<typeof MessageBubble> = {
  title: 'Components/Molecules/MessageBubble',
  tags: ['autodocs'],
  component: MessageBubble,
};

export default meta;

type Story = StoryObj<MessageBubbleProps>;

export const FromUser: Story = {
  args: {
    sender: 'user',
    text: 'Olá! Essa é uma pergunta.',
  },
};

export const FromAssistant: Story = {
  args: {
    sender: 'assistant',
    text: 'Claro! Aqui está a resposta 🤖',
  },
};
