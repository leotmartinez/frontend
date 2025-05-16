// src/components/atoms/Container/Container.tsx
import React from 'react';
import MuiContainer from '@mui/material/Container';
import type { ContainerProps as MuiContainerProps } from '@mui/material/Container';

export type ContainerProps = MuiContainerProps;

const Container: React.FC<ContainerProps> = (props) => {
  return <MuiContainer {...props} />;
};

export default Container;
