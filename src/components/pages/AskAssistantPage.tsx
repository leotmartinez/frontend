import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Paper,
} from '@mui/material';
import MessageList from '../organisms/MessageList';
import '../../stories/page.css';


type User = { name: string };
type Message = { sender: 'user' | 'assistant'; text: string };

export const AskAssistantPage: React.FC = () => {
  const [user, setUser] = useState<User>();
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
    <>

      {/* Conteúdo principal */}
      <Box display="flex" flexDirection="column" height="calc(100vh - 64px)">
        {/* Mensagens */}
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

          {/* {messages.map((msg, idx) => (
            <Box
              key={idx}
              alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
              maxWidth="70%"
            >
              <Paper
                elevation={1}
                sx={{
                  p: 1.5,
                  bgcolor: msg.sender === 'user' ? '#1976d2' : '#e0e0e0',
                  color: msg.sender === 'user' ? 'white' : 'black',
                  borderRadius: 2,
                }}
              >
                <Typography variant="body1">{msg.text}</Typography>
              </Paper>
            </Box>
          ))}
          <div ref={messagesEndRef} /> */}
        </Box>

        {/* Campo de input fixo abaixo */}
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleAsk();
          }}
          display="flex"
          p={2}
          gap={2}
          borderTop="1px solid #ddd"
          bgcolor="white"
        >
          <TextField
            placeholder="Ask a medical question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            fullWidth
            multiline
            maxRows={4}
          />
          <Button
            variant="contained"
            onClick={handleAsk}
            disabled={loading}
            type="submit"
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Enviar'}
          </Button>
        </Box>
      </Box>
    </>
  );
};



// // src/components/pages/AskAssistantPage.tsx
// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
// import { Header } from '../../stories/Header'; // ajuste o caminho se necessário
// import '../../stories/page.css'; // para manter o estilo do Header se necessário

// type User = {
//   name: string;
// };

// export const AskAssistantPage: React.FC = () => {
//   const [user, setUser] = useState<User>();
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [loading, setLoading] = useState(false);

//   const isStorybook = !!(window as any).__STORYBOOK_ADDONS_CHANNEL__;

//   const handleAsk = async () => {
//     if (!question.trim()) return;
//     setLoading(true);

//     if (isStorybook) {
//       setTimeout(() => {
//         setAnswer('Essa é uma resposta simulada do assistente 🤖');
//         setLoading(false);
//       }, 1000);
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:8000/api/pergunta/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ pergunta: question }),
//       });
//       const data = await response.json();
//       setAnswer(data.resposta || 'Sem resposta');
//     } catch (error) {
//       setAnswer('Erro ao buscar resposta.');
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <Header
//         user={user}
//         onLogin={() => setUser({ name: 'Jane Doe' })}
//         onLogout={() => setUser(undefined)}
//         onCreateAccount={() => setUser({ name: 'Jane Doe' })}
//       />

//       <Box display="flex" flexDirection="column" gap={2} maxWidth={600} margin="auto" mt={4}>
//         <Typography variant="h4" textAlign="center">
//           Assistente Inteligente
//         </Typography>

//         <TextField
//           label="Digite sua pergunta"
//           multiline
//           rows={4}
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           fullWidth
//         />

//         <Button variant="contained" onClick={handleAsk} disabled={loading}>
//           {loading ? <CircularProgress size={24} /> : 'Enviar'}
//         </Button>

//         {answer && (
//           <Box mt={2}>
//             <Typography variant="subtitle1">Resposta:</Typography>
//             <Typography variant="body1" color="text.secondary">
//               {answer}
//             </Typography>
//           </Box>
//         )}
//       </Box>
//     </>
//   );
// };
