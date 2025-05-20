import React from 'react';// Importa o React para usar JSX e componentes funcionais
import { IconButton, Tooltip } from '@mui/material';// Importa o componente IconButton e Tooltip da biblioteca Material UI
import type { IconButtonProps } from '@mui/material';// Importa o tipo das propriedades do IconButton do Material UI
//Essa parte aqui puxa o tipo de IconButtonProps do Material UI e todas as suas propriedades, só que eu crio também um novo tipo de IconButtonAtomProps que é o mesmo IconButtonProps, mas com mais duas propriedades: icon e label e iconColor. O label é uma string e o icon é um ReactNode, ou seja, pode ser qualquer coisa que o React renderize, como um ícone ou texto. o IconColor é uma string que representa a cor do ícone, e é opcional. O label é importante porque o label é o que vai aparecer na tooltip quando você passar o mouse em cima do botão
type IconButtonAtomProps = IconButtonProps & {
  icon: React.ReactNode;
  label: string;// é importante porque o label é o que vai aparecer na tooltip quando você passar o mouse em cima do botão
  iconColor?: string; // nova prop opcional para cor do ícone
};

// O componente IconButtonAtom é uma função que recebe as propriedades definidas acima e retorna um botão com ícone e tooltip, e tem aria-label para acessibilidade
export default function IconButtonAtom({
  icon,
  label,
  iconColor = '#FFFFFF', // valor padrão branco
  ...rest
}: IconButtonAtomProps) {
  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} {...rest}>
        {/* Aplica a cor escolhida ao ícone */}
        {React.isValidElement(icon)
          ? React.cloneElement(
              icon as React.ReactElement<any, any>,
              {
                ...(icon.props || {}),
                sx: { ...((icon.props as Record<string, any>)?.sx || {}), color: iconColor }
              }
            )
          : icon}
      </IconButton>
    </Tooltip>
  );
}