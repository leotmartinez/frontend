import React from 'react';
import MuiTypography from '@mui/material/Typography';
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

export type TypographyProps = MuiTypographyProps;

const Typography: React.FC<TypographyProps> = (props) => {
  return <MuiTypography {...props} />;
};

export default Typography;
