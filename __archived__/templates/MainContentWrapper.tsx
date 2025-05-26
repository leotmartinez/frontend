import React from 'react';
import { Box, useTheme } from '@mui/material';

type MainContentWrapperProps = {
  children: React.ReactNode;
};

const MainContentWrapper: React.FC<MainContentWrapperProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        backgroundColor: theme.vars
          ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
          : theme.palette.background.default,
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          px: 3,
          py: 5,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainContentWrapper;
