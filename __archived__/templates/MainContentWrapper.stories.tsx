import type { Meta, StoryObj } from '@storybook/react';
import MainContentWrapper from './MainContentWrapper';
import { Paper, Typography } from '@mui/material';

const meta: Meta<typeof MainContentWrapper> = {
  title: 'Components/Templates/MainContentWrapper',
  component: MainContentWrapper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainContentWrapper>;

export const Default: Story = {
  render: () => (
    <MainContentWrapper>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Conteúdo Exemplo
        </Typography>
        <Typography>
          Este é um exemplo de conteúdo dentro do <code>MainContentWrapper</code>. Ele mostra como o layout se comporta com padding, largura e centralização.
        </Typography>
      </Paper>
    </MainContentWrapper>
  ),
};
