import React from 'react';
// Importa o componente de botão de ícone e tooltip do Material UI
import { IconButton, Tooltip } from '@mui/material';
// Importa o tipo das props do IconButton
import type { IconButtonProps } from '@mui/material';
// Importa o hook para acessar o tema do Material UI
import { useTheme } from '@mui/material/styles';
// Importa o tipo Theme do Material UI
import type { Theme } from '@mui/material/styles';

// Define os valores permitidos para a cor do ícone
type IconColor = 'primary.50' | 'softBlue.200' | 'darkBlue.500' | 'common.white';

// Define as props do componente IconButtonAtom, estendendo as props padrão do IconButton
type IconButtonAtomProps = IconButtonProps & {
  icon: React.ReactNode; // Ícone a ser exibido no botão
  label: string;         // Texto do tooltip e aria-label para acessibilidade
  iconColor?: IconColor; // Cor do ícone, restrita aos valores definidos acima
};

// Função auxiliar para obter a cor do tema a partir do nome passado em iconColor
function getColorFromTheme(theme: Theme, color: IconColor): string | undefined {
  if (!color) return undefined; // Se não houver cor, retorna undefined

  // Acessa a paleta de cores do tema
  const palette = theme.palette as Record<string, any>;

  // Se a cor estiver no formato "paletteKey.shade" (ex: "primary.50")
  if (color.includes('.')) {
    const [paletteKey, shade] = color.split('.');
    if (palette[paletteKey]?.[shade]) {
      return palette[paletteKey][shade]; // Retorna a cor correspondente
    }
  }

  // Se a cor for uma chave direta da paleta (ex: "primary"), retorna o valor principal
  if (palette[color]?.main) {
    return palette[color].main;
  }

  // Caso não encontre, retorna o valor original
  return color;
}

// Componente funcional que renderiza um botão de ícone com tooltip e cor customizada
const IconButtonAtom: React.FC<IconButtonAtomProps> = ({
  icon,
  label,
  iconColor = 'common.white', // Cor padrão do ícone
  ...rest
}) => {
  const theme = useTheme(); // Obtém o tema atual do Material UI
  const resolvedColor = getColorFromTheme(theme, iconColor); // Resolve a cor do ícone

  return (
    // Tooltip para mostrar o label ao passar o mouse
    <Tooltip title={label}>
      {/* Botão de ícone do Material UI, com acessibilidade */}
      <IconButton aria-label={label} {...rest}>
        {/* Clona o elemento do ícone para aplicar a cor customizada via sx */}
        {React.isValidElement(icon)
          ? React.cloneElement(icon as React.ReactElement<any, any>, {
              ...(icon.props || {}),
              sx: {
                ...((icon.props as Record<string, any>)?.sx || {}),
                color: resolvedColor, // Aplica a cor resolvida
              },
            })
          : icon}
      </IconButton>
    </Tooltip>
  );
};

export default IconButtonAtom;