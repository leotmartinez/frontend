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


// import type { Meta } from '@storybook/react';
// import type { StoryObj } from '@storybook/react';
// import MessageBubble from './MessageBubble';
// import type { MessageBubbleProps } from './MessageBubble';

// const meta: Meta<typeof MessageBubble> = {
//   title: 'Components/Molecules/MessageBubble',
//   tags: ['autodocs'],
//   component: MessageBubble,
// };

// export default meta;

// type Story = StoryObj<MessageBubbleProps>;

// export const FromUser: Story = {
//   args: {
//     sender: 'user',
//     text: 'Olá! Essa é uma pergunta.',
//   },
// };

// export const FromAssistant: Story = {
//   args: {
//     sender: 'assistant',
//     text: 'Claro! Aqui está a resposta 🤖',
//   },
// };
