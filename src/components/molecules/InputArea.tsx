// Importa o React para usar JSX e componentes funcionais
import React from 'react';
// Importa componentes do Material UI para layout, campo de texto e indicador de carregamento
import { Box, TextField, CircularProgress } from '@mui/material';
// Importa o componente Button customizado do design system
import Button from '../atoms/Button'; // Importa o componente Button customizado 
// Importa o ícone de envio do Material UI
import { Send } from '@mui/icons-material'; // Importa o ícone de envio do Material UI

// Define as props esperadas pelo componente InputArea
interface InputAreaProps {
  question: string; // Texto da pergunta digitada
  onChange: (value: string) => void; // Função chamada ao alterar o texto
  onSubmit: () => void; // Função chamada ao enviar o formulário
  loading: boolean; // Indica se está carregando (enviando)
}

// Componente funcional que renderiza a área de input de perguntas
const InputArea: React.FC<InputAreaProps> = ({ question, onChange, onSubmit, loading }) => {
  return (
    // Box do MUI usado como formulário, com layout flexível e estilização
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault(); // Previne recarregamento da página ao enviar
        onSubmit(); // Chama a função de envio
      }}
      display="flex" // Layout flexível (linha)
      p={2} // Padding interno
      gap={2} // Espaçamento entre os elementos
      borderTop="1px solid #ddd" // Linha separadora no topo
      bgcolor="white" // Fundo branco
    >
      {/* Campo de texto para digitar a pergunta */}
      <TextField
        placeholder="Ask a medical question..." // Placeholder do campo
        value={question} // Valor controlado do input
        color='primary' // Cor do input
        onChange={(e) => onChange(e.target.value)} // Atualiza o texto ao digitar
        fullWidth // Ocupa toda a largura disponível
        multiline // Permite múltiplas linhas
        maxRows={4} // Limita a 4 linhas
      />
      {/* Botão de envio, customizado, com ícone e indicador de carregamento */}
      <Button
        variant="text" // Variante visual do botão
        startIcon={<Send />} // Ícone de envio à esquerda
        color="primary" // Cor do botão
        onClick={onSubmit} // Chama a função de envio ao clicar
        disabled={loading} // Desabilita o botão se estiver carregando
        type="submit" // Permite envio via Enter
        size='large' // Tamanho grande
      >
        {/* Mostra indicador de carregamento se loading, senão não mostra texto */}
        {loading ? <CircularProgress size={24} color="inherit" /> : ''}
      </Button>
    </Box>
  );
};

// Exporta o componente para uso em outros lugares do projeto
export default InputArea;





// // src/components/organisms/QuestionInput.tsx
// import React from 'react';
// import { Box, TextField, Button, CircularProgress } from '@mui/material';

// interface QuestionInputProps {
//   question: string;
//   onChange: (value: string) => void;
//   onSubmit: () => void;
//   loading: boolean;
// }

// const QuestionInput: React.FC<QuestionInputProps> = ({ question, onChange, onSubmit, loading }) => {
//   return (
//     <Box
//       component="form"
//       onSubmit={(e) => {
//         e.preventDefault();
//         onSubmit();
//       }}
//       display="flex"
//       p={2}
//       gap={2}
//       borderTop="1px solid #ddd"
//       bgcolor="white"
//     >
//       <TextField
//         placeholder="Ask a medical question..."
//         value={question}
//         onChange={(e) => onChange(e.target.value)}
//         fullWidth
//         multiline
//         maxRows={4}
//       />
//       <Button
//         variant="contained"
//         onClick={onSubmit}
//         disabled={loading}
//         type="submit"
//       >
//         {loading ? <CircularProgress size={24} color="inherit" /> : 'Enviar'}
//       </Button>
//     </Box>
//   );
// };

// export default QuestionInput;
