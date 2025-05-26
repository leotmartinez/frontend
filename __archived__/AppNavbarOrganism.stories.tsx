import AppNavbarOrganism from './AppNavbarOrganism';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppNavbarOrganism> = {
  component: AppNavbarOrganism,
  title: 'Components/Organisms/AppNavbarOrganism',
};

export default meta;

type Story = StoryObj<typeof AppNavbarOrganism>;

export const Default: Story = {
  render: () => <AppNavbarOrganism />,
};
