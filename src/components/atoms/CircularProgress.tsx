// src/components/atoms/CircularProgress.tsx
import React from 'react';
import MuiCircularProgress from '@mui/material/CircularProgress';
import type { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress';

export type CircularProgressProps = MuiCircularProgressProps;

const CircularProgress: React.FC<CircularProgressProps> = (props) => {
  return <MuiCircularProgress {...props} />;
};

export default CircularProgress;
