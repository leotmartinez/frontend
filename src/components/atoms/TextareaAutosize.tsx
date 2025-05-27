// src/components/atoms/TextareaAutosize.tsx
import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/material/styles';

export interface TextFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  fontSize: '1rem',
  fontFamily: theme.typography.fontFamily,
  padding: '12px',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #ccc',
  resize: 'none',
  '&:focus': {
    borderColor: theme.palette.primary.main,
    outline: 'none',
  },
}));

const TextField: React.FC<TextFieldProps> = (props) => {
  return <StyledTextarea minRows={1} {...props} />;
};

export default TextField;
