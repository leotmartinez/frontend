// src/components/atoms/TextField/TextField.tsx

import React from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';

// Extende as propriedades do TextField para incluir cores personalizadas
declare module '@mui/material/TextField' {
  interface OutlinedTextFieldPropsColorOverride {
    softBlue: true;
    darkBlue: true;
  }
}

// Define as props customizadas, incluindo endIcon
// Usamos type ao invés de interface para evitar problemas de extensão
export type CustomTextFieldProps = TextFieldProps & {
  endIcon?: React.ReactNode;
};

/**
 * Componente TextField customizado com suporte a `endIcon` usando slotProps.input.endAdornment (MUI v8).
 *
 * @param endIcon Ícone ou elemento a ser renderizado no final do campo.
 * @param slotProps Props específicas para os slots do TextField.
 * @param props Demais props do TextField padrão.
 *
 * @returns Um TextField com possível ícone ao final.
 */
const CustomTextField: React.FC<CustomTextFieldProps> = ({
  endIcon,
  slotProps,
  ...props
}) => {
  return (
    <TextField
      {...props}
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          endAdornment: endIcon,
        },
      }}
    />
  );
};

export default CustomTextField;