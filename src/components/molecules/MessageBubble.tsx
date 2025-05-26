// src/components/molecules/MessageBubble.tsx
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export type MessageBubbleProps = {
  sender: 'user' | 'assistant';
  text: string;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ sender, text }) => {
  const isUser = sender === 'user';

  return (
    <Box
      alignSelf={isUser ? 'flex-end' : 'flex-start'}
      maxWidth="70%"
    >
      <Paper
        elevation={1}
        sx={{
          p: 1.5,
          bgcolor: isUser ? '#1976d2' : '#e0e0e0',
          color: isUser ? 'white' : 'black',
          borderRadius: 2,
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Paper>
    </Box>
  );
};

export default MessageBubble;
