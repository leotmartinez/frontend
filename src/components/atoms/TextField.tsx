// src/components/atoms/TextField/TextField.tsx

import React from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';
import type { Theme } from '@mui/material/styles';
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
  color = 'primary', // valor padrão para color
  ...props
}) => {
  // Se endIcon for um ReactElement, aplica sx dinâmico para cor do contorno
  const themedEndIcon =
    React.isValidElement(endIcon) && endIcon.props && typeof endIcon.props === 'object' && 'sx' in endIcon.props
      ? React.cloneElement(
          endIcon as React.ReactElement<{ sx?: any }>,
          {
            sx: {
              color: (theme: Theme) => theme.palette[color]?.main || theme.palette.primary.main,
              // Aplica a cor do hover do input ao ícone também
              '.MuiOutlinedInput-root:hover &': {
                color: (theme: Theme) => theme.palette[color]?.main || theme.palette.primary.main,
              },
              '.Mui-focused &': {
                color: (theme: Theme) => theme.palette[color]?.main || theme.palette.primary.main,
              },
              ...(endIcon.props.sx || {}),
            },
          }
        )
      : endIcon;

  return (
    <TextField
      {...props}
      color={color}
      sx={{
        // Hover dinâmico: usa a cor do input selecionada
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: (theme) => theme.palette[color]?.main || theme.palette.primary.main,
        },
      
      }}
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          endAdornment: themedEndIcon,
        },
      }}
    />
  );
};

export default CustomTextField;