// src/components/atoms/Box/Box.tsx
import React from 'react';
import MuiBox from '@mui/material/Box';
import type { BoxProps as MuiBoxProps } from '@mui/material/Box';

export type BoxProps = MuiBoxProps;

const Box: React.FC<BoxProps> = (props) => {
  return <MuiBox {...props} />;
};

export default Box;
