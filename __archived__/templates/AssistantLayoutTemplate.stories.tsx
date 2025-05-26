import type { Meta, StoryObj } from '@storybook/react';
import AssistantLayoutTemplate from './AssistantLayoutTemplate';
import { Paper, Typography } from '@mui/material';

const meta: Meta<typeof AssistantLayoutTemplate> = {
  title: 'Components/Templates/AssistantLayoutTemplate',
  component: AssistantLayoutTemplate,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AssistantLayoutTemplate>;

export const Default: Story = {
  render: () => (
    <AssistantLayoutTemplate>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Conteúdo dentro do layout completo
        </Typography>
        <Typography>
          Este é um exemplo com SideMenu, AppNavbar e o conteúdo principal centralizado com padding.
        </Typography>
      </Paper>
    </AssistantLayoutTemplate>
  ),
};
