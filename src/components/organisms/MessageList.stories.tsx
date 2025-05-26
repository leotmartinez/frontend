import type { Meta } from '@storybook/react';
import type { StoryObj } from '@storybook/react';
import MessageList from './MessageList';
import type { MessageListProps } from './MessageList';

const meta: Meta<typeof MessageList> = {
  title: 'Components/Organisms/MessageList',
  tags: ['autodocs'],
  component: MessageList,
};

export default meta;

type Story = StoryObj<MessageListProps>;

export const Default: Story = {
  args: {
    messages: [
      { sender: 'user', text: 'Olá, tudo bem?' },
      { sender: 'assistant', text: 'Olá! Como posso te ajudar?' },
      { sender: 'user', text: 'Qual é a dosagem de paracetamol pra adulto?' },
      { sender: 'assistant', text: '500mg a 1g a cada 4-6h, máximo 4g/dia.' },
    ],
  },
};
