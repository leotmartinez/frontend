import React from 'react';
import TextareaAutosize from '../atoms/TextareaAutosize';
import Box from '../atoms/Box';
import Button from '../atoms/Button';
import Paper from '../atoms/Paper';
import CircularProgress from '../atoms/CircularProgress';

interface InputAreaProps {
  question: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({ question, onChange, onSubmit, loading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // evita quebra de linha
      if (!loading && question.trim()) {
        onSubmit();
      }
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        padding: '12px',
        gap: 1,
        borderTop: '1px solid #e0e0e0',
        backgroundColor: '#f9f9f9',
        position: 'sticky',
        bottom: 0,
        zIndex: 10,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <TextareaAutosize
          placeholder="Ask a medical question..."
          value={question}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}

          style={{
            width: '100%',
            fontSize: '1rem',
            padding: '12px',
            borderRadius: 12,
            border: '1px solid #ccc',
            resize: 'none',
            fontFamily: 'inherit',
            backgroundColor: 'white',
            boxSizing: 'border-box',
          }}
        />
      </Box>

      <Box sx={{ alignSelf: 'flex-end' }}>
        <Button
          variant="contained"
          onClick={onSubmit}
          disabled={loading || !question.trim()}
          type="submit"
          sx={{ minWidth: 40, minHeight: 40, borderRadius: '50%' }}
        >
          {loading ? <CircularProgress size={20} color="inherit" /> : '➤'}
        </Button>
      </Box>
    </Paper>
  );
};

export default InputArea;