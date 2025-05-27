// src/components/atoms/Button/Button.tsx

// Importa o React para usar JSX e componentes funcionais
import React from 'react';
// Importa o componente Button da biblioteca Material UI
import MuiButton from '@mui/material/Button';
// Importa o tipo das propriedades do Button do Material UI
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
// O tipo ButtonProps pode ser igual ao do MUI
export type ButtonProps = MuiButtonProps;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <MuiButton {...props}>{children}</MuiButton>
);



// Exporta o componente Button como padrão
export default Button;
