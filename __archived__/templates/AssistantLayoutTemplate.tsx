// src/components/templates/AssistantLayoutTemplate.tsx
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import AppNavbar from '../pages/AssistantLayout/components/AppNavbar';
import SideMenu from '../pages/AssistantLayout/components/SideMenu';
import MainContentWrapper from './MainContentWrapper';
import AppTheme from '../../src/components/shared-theme/AppTheme';

interface AssistantLayoutTemplateProps {
  children: React.ReactNode;
}

const AssistantLayoutTemplate: React.FC<AssistantLayoutTemplateProps> = ({ children }) => {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : theme.palette.background.default,
            overflow: 'auto',
          })}
        >
          <MainContentWrapper>
            {children}
          </MainContentWrapper>
        </Box>
      </Box>
    </AppTheme>
  );
};

export default AssistantLayoutTemplate;
