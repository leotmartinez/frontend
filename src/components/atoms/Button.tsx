// src/components/atoms/Button/Button.tsx

// Importa o React para usar JSX e componentes funcionais
import React from 'react';
// Importa o componente Button da biblioteca Material UI
import MuiButton from '@mui/material/Button';
// Importa o tipo das propriedades do Button do Material UI
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

// Sobrescreve as cores aceitas pelo Button do MUI para incluir as customizadas do tema
// Isso permite usar color="softBlue" e color="darkBlue" sem erro de tipagem
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    softBlue: true;
    darkBlue: true;
  }
}

// O tipo ButtonProps pode ser igual ao do MUI
export type ButtonProps = MuiButtonProps;

// Componente funcional Button que repassa todas as props para o MuiButton
const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <MuiButton {...props}>{children}</MuiButton>
);

// Agora você pode usar <Button color="softBlue" /> ou <Button color="darkBlue" />
// O MUI aplicará as cores customizadas se elas estiverem definidas no seu theme
// Para adicionar mais cores customizadas, basta incluir na declaração de módulo acima

// Exporta o componente Button como padrão
export default Button;
