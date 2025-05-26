import SideMenu from './SideMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SideMenu> = {
  component: SideMenu,
  title: 'component/SideMenu',
};

export default meta;

type Story = StoryObj<typeof SideMenu>;

export const Default: Story = {
  render: () => <SideMenu />,
};
