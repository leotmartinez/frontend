// src/components/atoms/List/List.tsx
import React from 'react';
import MuiList from '@mui/material/List';
import type { ListProps as MuiListProps } from '@mui/material/List';

export type ListProps = MuiListProps;

const List: React.FC<ListProps> = (props) => {
  return <MuiList {...props} />;
};

export default List;
