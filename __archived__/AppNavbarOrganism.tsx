// src/components/organisms/AppNavbarOrganism.tsx
import { AppBar, Box, Stack, styled } from '@mui/material';
import MuiToolbar from '@mui/material/Toolbar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ColorModeIconDropdown from '../src/components/shared-theme/ColorModeIconDropdown';
import NavbarHeader from './NavbarHeader';
import MenuButton from '../src/components/pages/AssistantLayout/components/MenuButton';
import SideMenuMobile from '../src/components/pages/AssistantLayout/components/SideMenuMobile';
import { useState } from 'react';

const Toolbar = styled(MuiToolbar)({
  width: '100%',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '12px',
});

export default function AppNavbarOrganism() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: 'auto', md: 'none' },
        boxShadow: 0,
        bgcolor: 'background.paper',
        backgroundImage: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        top: 'var(--template-frame-height, 0px)',
      }}
    >
      <Toolbar variant="regular">
        <Stack direction="row" sx={{ alignItems: 'center', flexGrow: 1, width: '100%', gap: 1 }}>
          <NavbarHeader />
          <ColorModeIconDropdown />
          <MenuButton aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuRoundedIcon />
          </MenuButton>
          <SideMenuMobile open={open} toggleDrawer={toggleDrawer} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
