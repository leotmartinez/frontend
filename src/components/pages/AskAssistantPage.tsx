import React, { useState, useRef, useEffect } from 'react';
import Box from '../atoms/Box';
import MessageList from '../organisms/MessageList';
import InputArea from '../molecules/InputArea';

type Message = { sender: 'user' | 'assistant'; text: string };

export const AskAssistantPage: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isStorybook = !!(window as any).__STORYBOOK_ADDONS_CHANNEL__;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const userMessage = { sender: 'user' as const, text: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion('');
    setLoading(true);

    if (isStorybook) {
      setTimeout(() => {
        const mockAnswer = {
          sender: 'assistant' as const,
          text: 'Essa é uma resposta simulada do assistente 🤖',
        };
        setMessages((prev) => [...prev, mockAnswer]);
        setLoading(false);
      }, 1000);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/pergunta/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pergunta: question }),
      });
      const data = await response.json();
      const assistantMessage = {
        sender: 'assistant' as const,
        text: data.resposta || 'Sem resposta',
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'assistant', text: 'Erro ao buscar resposta.' },
      ]);
    }

    setLoading(false);
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box
        flex={1}
        overflow="auto"
        p={2}
        display="flex"
        flexDirection="column"
        gap={2}
        bgcolor="#f5f5f5"
      >
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </Box>

      <InputArea
        question={question}
        onChange={setQuestion}
        onSubmit={handleAsk}
        loading={loading}
      />
    </Box>
  );
};