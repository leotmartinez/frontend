// src/components/atoms/Box/Box.tsx
import React from 'react';
// Importa o componente Box do Material UI
import MuiBox from '@mui/material/Box';
// Importa o tipo das props do Box do Material UI
import type { BoxProps as MuiBoxProps } from '@mui/material/Box';
// Define o tipo das props do componente Box, igual ao do MUI
export type BoxProps = MuiBoxProps;

// Componente funcional que repassa todas as props para o Box do MUI
const Box: React.FC<BoxProps> = (props) => {
  return <MuiBox {...props} />;
};

export default Box;
