// src/components/pages/AskAssistantPage.tsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import { Header } from '../../stories/Header'; // ajuste o caminho se necessário
import '../../stories/page.css'; // para manter o estilo do Header se necessário

type User = {
  name: string;
};

export const AskAssistantPage: React.FC = () => {
  const [user, setUser] = useState<User>();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const isStorybook = !!(window as any).__STORYBOOK_ADDONS_CHANNEL__;

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);

    if (isStorybook) {
      setTimeout(() => {
        setAnswer('Essa é uma resposta simulada do assistente 🤖');
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
      setAnswer(data.resposta || 'Sem resposta');
    } catch (error) {
      setAnswer('Erro ao buscar resposta.');
    }
    setLoading(false);
  };

  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <Box display="flex" flexDirection="column" gap={2} maxWidth={600} margin="auto" mt={4}>
        <Typography variant="h4" textAlign="center">
          Assistente Inteligente
        </Typography>

        <TextField
          label="Digite sua pergunta"
          multiline
          rows={4}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          fullWidth
        />

        <Button variant="contained" onClick={handleAsk} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Enviar'}
        </Button>

        {answer && (
          <Box mt={2}>
            <Typography variant="subtitle1">Resposta:</Typography>
            <Typography variant="body1" color="text.secondary">
              {answer}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};



// // src/components/pages/AskAssistantPage.tsx
// import React, { useState } from 'react';
// import { Header } from '../../stories/Header'; // ajuste o caminho se necessário
// import '../../stories/page.css'; // reaproveitando estilo

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
//     <article>
//       <Header
//         user={user}
//         onLogin={() => setUser({ name: 'Jane Doe' })}
//         onLogout={() => setUser(undefined)}
//         onCreateAccount={() => setUser({ name: 'Jane Doe' })}
//       />

//       <section className="storybook-page">
//         <h2>Assistente Inteligente</h2>
//         <p>Faça uma pergunta e veja a resposta do assistente:</p>

//         <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
//           <textarea
//             placeholder="Digite sua pergunta..."
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             rows={4}
//           />
//           <button onClick={handleAsk} disabled={loading}>
//             {loading ? 'Perguntando...' : 'Perguntar'}
//           </button>
//           {answer && (
//             <div style={{ padding: 12, backgroundColor: '#f5f5f5', borderRadius: 4 }}>
//               <strong>Resposta:</strong> <p>{answer}</p>
//             </div>
//           )}
//         </div>
//       </section>
//     </article>
//   );
// };



// import { useState } from 'react';
// import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';

// export default function AskAssistantPage() {
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [loading, setLoading] = useState(false);


//   const isStorybook = !!(window as any).__STORYBOOK_ADDONS_CHANNEL__;

// const handleAsk = async () => {
//   if (!question.trim()) return;
//   setLoading(true);

//   if (isStorybook) {
//     setTimeout(() => {
//       setAnswer('Essa é uma resposta simulada do assistente 🤖');
//       setLoading(false);
//     }, 1000);
//     return;
//   }

//   try {
//     const response = await fetch('http://localhost:8000/api/pergunta/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ pergunta: question }),
//     });
//     const data = await response.json();
//     setAnswer(data.resposta || 'Sem resposta');
//   } catch (error) {
//     setAnswer('Erro ao buscar resposta.');
//   }
//   setLoading(false);
// };

//   return (
//     <Box display="flex" flexDirection="column" gap={2} maxWidth={600} margin="auto" mt={4}>
//       <Typography variant="h4" textAlign="center">
//         Assistente Inteligente
//       </Typography>

//       <TextField
//         label="Digite sua pergunta"
//         multiline
//         rows={4}
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         fullWidth
//       />

//       <Button variant="contained" onClick={handleAsk} disabled={loading}>
//         {loading ? <CircularProgress size={24} /> : 'Enviar'}
//       </Button>

//       {answer && (
//         <Box mt={2}>
//           <Typography variant="subtitle1">Resposta:</Typography>
//           <Typography variant="body1" color="text.secondary">
//             {answer}
//           </Typography>
//         </Box>
//       )}
//     </Box>
//   );
// }
