// Importa hook para manipular o modo de cor (claro/escuro/sistema) do MUI
import { useColorScheme } from '@mui/material/styles';
// Importa componentes de menu do MUI
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectProps } from '@mui/material/Select';

// Componente que permite ao usuário selecionar o modo de cor (claro, escuro ou sistema)
export default function ColorModeSelect(props: SelectProps) {
  // Obtém o modo atual e a função para alterá-lo
  const { mode, setMode } = useColorScheme();

  // Se não houver modo disponível, não renderiza nada
  if (!mode) {
    return null;
  }

  // Renderiza um Select para escolher o modo de cor
  return (
    <Select
      value={mode} // valor atual do modo
      onChange={(event) =>
        setMode(event.target.value as 'system' | 'light' | 'dark') // altera o modo ao selecionar
      }
      SelectDisplayProps={{
        // Propriedade customizada para facilitar screenshots/testes
        // @ts-ignore
        'data-screenshot': 'toggle-mode',
      }}
      {...props} // permite passar outras props para o Select
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
}