import type { Meta, StoryObj } from '@storybook/react';
import Paper from './Paper';

const meta: Meta<typeof Paper> = {
  title: 'Components/Atoms/Paper',
  component: Paper,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  render: () => (
    <Paper elevation={3} sx={{ p: 2 }}>
      Exemplo de Paper
    </Paper>
  ),
};
