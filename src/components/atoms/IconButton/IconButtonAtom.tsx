import React from 'react';// Importa o React para usar JSX e componentes funcionais
import { IconButton, Tooltip } from '@mui/material';// Importa o componente IconButton e Tooltip da biblioteca Material UI
import type { IconButtonProps } from '@mui/material';// Importa o tipo das propriedades do IconButton do Material UI

//Essa parte aqui puxa o tipo de IconButtonProps do Material UI e todas as suas propriedades, só que eu crio também um novo tipo de IconButtonAtomProps que é o mesmo IconButtonProps, mas com mais duas propriedades: icon e label. O label é uma string e o icon é um ReactNode, ou seja, pode ser qualquer coisa que o React renderize, como um ícone ou texto.
type IconButtonAtomProps = IconButtonProps & {
  icon: React.ReactNode;
  label: string;// é importante porque o label é o que vai aparecer na tooltip quando você passar o mouse em cima do botão
};

// O componente IconButtonAtom é uma função que recebe as propriedades definidas acima e retorna um botão com ícone e tooltip, e tem aria-label para acessibilidade
export default function IconButtonAtom({
  icon,
  label,
  ...rest
}: IconButtonAtomProps) {
  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} {...rest}>
        {icon}
      </IconButton>
    </Tooltip>
  );
}