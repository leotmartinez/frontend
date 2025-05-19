// src/components/atoms/Button/Button.tsx

// Importa o React para usar JSX e componentes funcionais
import React from 'react';
// Importa o componente Button da biblioteca Material UI
import MuiButton from '@mui/material/Button';
// Importa o tipo das propriedades do Button do Material UI
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

// Define um novo tipo ButtonProps baseado nas propriedades do Button do Material UI
export type ButtonProps = MuiButtonProps;

// Componente funcional Button que repassa todas as props para o MuiButton
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  // Renderiza o MuiButton com as props recebidas e os elementos filhos
  return <MuiButton {...props}>{children}</MuiButton>;
};

// Exporta o componente Button como padrão
export default Button;
