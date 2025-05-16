// src/components/atoms/List/List.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import List from './List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const meta: Meta<typeof List> = {
  title: 'Components/Atoms/List',
  component: List,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </>
    ),
    dense: false,
    disablePadding: false,
  },
  argTypes: {
    dense: {
      control: 'boolean',
    },
    disablePadding: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Playground: Story = {};
