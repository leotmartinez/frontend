import React from 'react';// Importa o React para usar JSX e componentes funcionais
import { IconButton, Tooltip } from '@mui/material';// Importa o componente IconButton e Tooltip da biblioteca Material UI
import type { IconButtonProps } from '@mui/material';// Importa o tipo das propriedades do IconButton do Material UI
//Essa parte aqui puxa o tipo de IconButtonProps do Material UI e todas as suas propriedades, só que eu crio também um novo tipo de IconButtonAtomProps que é o mesmo IconButtonProps, mas com mais duas propriedades: icon e label e iconColor. O label é uma string e o icon é um ReactNode, ou seja, pode ser qualquer coisa que o React renderize, como um ícone ou texto. o IconColor é uma string que representa a cor do ícone, e é opcional. O label é importante porque o label é o que vai aparecer na tooltip quando você passar o mouse em cima do botão
import { useTheme } from '@mui/material/styles';// Importa o hook useTheme do Material UI para acessar o tema atual
import type { Theme } from '@mui/material/styles';// Importa o tipo Theme do Material UI para tipar o tema

type IconButtonAtomProps = IconButtonProps & {
  icon: React.ReactNode;
  label: string;// é importante porque o label é o que vai aparecer na tooltip quando você passar o mouse em cima do botão
  iconColor?: string; // nova prop opcional para cor do ícone
};


function getColorFromTheme(theme: Theme, color: string): string | undefined {
  if (!color) return undefined; // Se não foi passada nenhuma cor, retorna undefined

  // Se for uma cor direta (hex, rgb, hsl), retorna do jeito que veio
  if (
    color.startsWith('#') ||
    color.startsWith('rgb') ||
    color.startsWith('hsl')
  ) {
    return color;
  }

  const palette = theme.palette as Record<string, any>;

  // Se a string de cor tiver um ponto, tenta dividir em [paletteKey, shade]
  if (color.includes('.')) {
    const [paletteKey, shade] = color.split('.');
    
    // Se existir paletteKey e shade válidos no tema, retorna a cor
    if (palette[paletteKey]?.[shade]) {
      return palette[paletteKey][shade];
    }
  }

  // Se a cor for apenas o nome da paleta (ex: "primary"), tenta usar o `.main`
  if (palette[color]?.main) {
    return palette[color].main;
  }

  // Se nada deu certo, retorna a cor original (talvez inválida)
  return color;
}
// O componente IconButtonAtom é uma função que recebe as propriedades definidas acima e retorna um botão com ícone e tooltip, e tem aria-label para acessibilidade e a possibilidade de cores personalizadas para o ícone
const IconButtonAtom: React.FC<IconButtonAtomProps> = ({
  icon,
  label,
  iconColor = 'common.white',
  // Se não houver cor, usa a cor padrão branca
  ...rest
}) => {
  const theme = useTheme();
  const resolvedColor = getColorFromTheme(theme, iconColor);

  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} {...rest}>
        {React.isValidElement(icon)
          ? React.cloneElement(icon as React.ReactElement<any, any>, {
              ...(icon.props || {}),
              sx: { ...((icon.props as Record<string, any>)?.sx || {}), color: resolvedColor },
            })
          : icon}
      </IconButton>
    </Tooltip>
  );
};

export default IconButtonAtom;