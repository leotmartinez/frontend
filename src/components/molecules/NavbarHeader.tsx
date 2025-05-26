// src/components/molecules/NavbarHeader.tsx
import { Stack, Typography } from '@mui/material';
import CustomIcon from '../atoms/CustomIcon';

export default function NavbarHeader() {
  return (
    <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', mr: 'auto' }}>
      <CustomIcon />
      <Typography variant="h4" component="h1" sx={{ color: 'text.primary' }}>
        {/* Insira nome ou deixe em branco para Storybook */ "teste"}
      </Typography>
    </Stack>
  );
}