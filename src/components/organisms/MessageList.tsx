// src/components/organisms/MessageList.tsx
import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import MessageBubble from '../molecules/MessageBubble';
import type { MessageBubbleProps } from '../molecules/MessageBubble';

export type MessageListProps = {
  messages: MessageBubbleProps[];
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      flex={1}
      overflow="auto"
      p={2}
      display="flex"
      flexDirection="column"
      gap={2}
      bgcolor="#f5f5f5"
    >
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default MessageList;
