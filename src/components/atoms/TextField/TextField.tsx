// src/components/atoms/TextField/TextField.tsx
import React from 'react';
import MuiTextField from '@mui/material/TextField';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type TextFieldProps = MuiTextFieldProps;

const TextField: React.FC<TextFieldProps> = (props) => {
  return <MuiTextField {...props} />;
};

export default TextField;
