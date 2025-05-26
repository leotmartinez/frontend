import React from 'react';
import { Box, TextField, Button, CircularProgress } from '@mui/material';

interface InputAreaProps {
  question: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({ question, onChange, onSubmit, loading }) => {
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
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
        onChange={(e) => onChange(e.target.value)}
        fullWidth
        multiline
        maxRows={4}
      />
      <Button
        variant="contained"
        onClick={onSubmit}
        disabled={loading}
        type="submit"
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Enviar'}
      </Button>
    </Box>
  );
};

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
