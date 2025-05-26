import React from 'react';
import MuiPaper from '@mui/material/Paper';
import type { PaperProps as MuiPaperProps } from '@mui/material/Paper';

export type PaperProps = MuiPaperProps;

const Paper: React.FC<PaperProps> = (props) => {
  return <MuiPaper {...props} />;
};

export default Paper;
