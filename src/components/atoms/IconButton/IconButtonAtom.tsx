// Importa o React para usar JSX e componentes funcionais
import React from 'react';
// Importa o componente de botão de ícone e tooltip do Material UI
import { IconButton, Tooltip } from '@mui/material';
// Importa o tipo das props do IconButton
import type { IconButtonProps } from '@mui/material';
// Importa o hook para acessar o tema do Material UI
import { useTheme } from '@mui/material/styles';
// Importa o tipo Theme do Material UI
import type { Theme } from '@mui/material/styles';

// Define as props do componente IconButtonAtom, estendendo as props padrão do IconButton
// - icon: ícone a ser exibido no botão
// - label: texto do tooltip e aria-label para acessibilidade
// - ...rest: outras props padrão do IconButton (onClick, color, etc)
type IconButtonAtomProps = IconButtonProps & {
  icon: React.ReactNode;
  label: string;
};

// Componente funcional que renderiza um botão de ícone com tooltip e cor customizada
const IconButtonAtom: React.FC<IconButtonAtomProps> = ({
  icon,
  label,
  ...rest
}) => {
  // Obtém o tema atual do Material UI para acessar as cores do tema
  const Theme = useTheme();

  return (
    // Tooltip para mostrar o label ao passar o mouse
    <Tooltip title={label}>
      {/* Botão de ícone do Material UI, com acessibilidade */}
      <IconButton aria-label={label} {...rest}>
        {/*
          Se o ícone for um ReactElement, clona o elemento para aplicar a cor customizada via sx,
          usando a cor primária do tema. Se não for, apenas renderiza o ícone como está.
        */}
        {React.isValidElement(icon)
          ? React.cloneElement(icon as React.ReactElement<any, any>, {
              ...(icon.props || {}),
              sx: {
                ...((icon.props as Record<string, any>)?.sx || {}),
                color: (Theme as Theme).palette.primary.main, // Aplica a cor primária do tema ao ícone
              },
            })
          : icon}
      </IconButton>
    </Tooltip>
  );
};

// Exporta o componente para uso em outros lugares do projeto
export default IconButtonAtom;