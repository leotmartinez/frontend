import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: () => (
    <Typography variant="body1">
      Exemplo de Typography com body1
    </Typography>
  ),
};
